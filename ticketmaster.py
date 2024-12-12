

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
    print("Stored events count:")
    print(stored_events_count)
    
    num_added = 0
    for event in event_list[stored_events_count:]:
        if num_added >= 25:
            break
        event_name = event.get('event_name')
        if not event.get('artist'):
            artist = 'Unknown Artist'
        else:
            artist = event.get('artist', ['Unknown Artist'])[0]
        venue = event.get('venue')
        event_date = event.get('event_date')
        
        c.execute('''
            INSERT INTO TicketmasterEvents (event_name, artist, venue, event_date)
            VALUES (?, ?, ?, ?)
        ''', (event_name, artist, venue, event_date))
        num_added += 1
              

    conn.commit()
    conn.close()

def get_ticketmaster_data():
    api_key = os.getenv("TICKETMASTER_KEY")
    
    events_with_artists = get_us_music_events(api_key, pages=20)  # You can adjust the number of pages as needed

    return events_with_artists 