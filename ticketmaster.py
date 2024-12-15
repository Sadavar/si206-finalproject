

import datetime
import json
import os
import sqlite3

import requests

def cleanArtists(event_list):
    for event in event_list:
        if 'artists' in event and event['artists']:
            # Get the first artist name
            first_artist = event['artists'][0]
            # Remove any commas from the artist name
            cleaned_artist = first_artist.replace(',', '')
            # Update the artist list to only include the cleaned first artist name
            event['artists'] = [cleaned_artist]
    return event_list

def get_us_music_events(api_key, pages):
    base_url = f"https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&countryCode=US"
    url = base_url
    all_events = []

    for i in range(pages):
        response = requests.get(f"{url}&page={i+1}&apikey={api_key}")

        if response.status_code != 200:
            raise Exception("API request was unsuccessful.")
        
        events_data = response.json()
        with open('events.json', 'w') as json_file:
            json.dump(events_data, json_file, indent=4)

        events = events_data.get('_embedded', {}).get('events', [])
        all_events.extend(events)
        
        next_link = events_data.get('_links', {}).get('next', {}).get('href')
        if not next_link:
            break

    event_list = []
    for event in all_events:
        event_name = event.get('name', 'Unnamed Event')
        artists = event.get('_embedded', {}).get('attractions', [])
        artist_name = [artist.get('name', 'Unknown Artist') for artist in artists]
        venue = event.get('_embedded', {}).get('venues', [{}])[0]
        venue_name = venue.get('name', 'Unknown Venue')
        event_date = event.get('dates', {}).get('start', {}).get('localDate', 'Unknown Date')
        
        event_list.append({
            'event_name': event_name,
            'artist': artist_name,
            'venue': venue_name,
            'event_date': event_date
        })
    event_list = cleanArtists(event_list)
    return event_list

def save_ticketmaster_data(event_list):
    conn = sqlite3.connect('data.db')
    c = conn.cursor()

    # get the number of already stored events
    c.execute('SELECT COUNT(*) FROM TicketmasterEvents')
    stored_events_count = c.fetchone()[0]

    num_added = 0
    for event in event_list[stored_events_count:]:
        if num_added >= 3:  
            break

        # Extract event details
        event_name = event.get('event_name', 'Unnamed Event')
        artist_name = event.get('artist', ['Unknown Artist'])[0]
        venue_name = event.get('venue', 'Unknown Venue')
        event_date = event.get('event_date', '0000-00-00') 

        # Ensure event_date is in YYYY-MM-DD format
        try:
            parsed_date = datetime.datetime.strptime(event_date, "%Y-%m-%d")
            event_date = parsed_date.strftime("%Y-%m-%d") 
        except ValueError:
            print(f"Invalid date format for {event_name}: {event_date}. Skipping event.")
            continue

        # Insert or fetch artist ID
        c.execute('SELECT artist_id FROM Artists WHERE artist_name = ?', (artist_name,))
        artist_row = c.fetchone()
        if artist_row:
            artist_id = artist_row[0]
        else:
            c.execute('INSERT INTO Artists (artist_name) VALUES (?)', (artist_name,))
            num_added += 1
            artist_id = c.lastrowid

        # Insert or fetch venue ID
        c.execute('SELECT venue_name_id FROM Venues WHERE venue_name = ?', (venue_name,))
        venue_row = c.fetchone()
        if venue_row:
            venue_name_id = venue_row[0]
        else:
            c.execute('INSERT INTO Venues (venue_name) VALUES (?)', (venue_name,))
            num_added += 1
            venue_name_id = c.lastrowid

        # Insert or fetch event name ID
        c.execute('SELECT event_name_id FROM Events WHERE event_name = ?', (event_name,))
        event_row = c.fetchone()
        if event_row:
            event_name_id = event_row[0]
        else:
            c.execute('INSERT INTO Events (event_name) VALUES (?)', (event_name,))
            num_added += 1
            event_name_id = c.lastrowid

        # Insert event into TicketmasterEvents
        c.execute('''
            INSERT INTO TicketmasterEvents (event_name_id, artist_id, venue_name_id, event_date)
            VALUES (?, ?, ?, ?)
        ''', (event_name_id, artist_id, venue_name_id, event_date))

        num_added += 1
    
    # Commit the changes and close the connection
    conn.commit()
    conn.close()

def get_ticketmaster_data():
    api_key = os.getenv("TICKETMASTER_KEY")
    
    events_with_artists = get_us_music_events(api_key, pages=20)  # You can adjust the number of pages as needed

    return events_with_artists 