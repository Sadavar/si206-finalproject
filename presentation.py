import base64
import sqlite3
import requests
from bs4 import BeautifulSoup
import re
import os
import csv
import json
import matplotlib.pyplot as plt
from collections import Counter, defaultdict

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
        artist_names = [artist.get('name', 'Unknown Artist') for artist in artists]
        venue = event.get('_embedded', {}).get('venues', [{}])[0]
        venue_name = venue.get('name', 'Unknown Venue')
        event_date = event.get('dates', {}).get('start', {}).get('localDate', 'Unknown Date')
        
        event_list.append({
            'event_name': event_name,
            'artists': artist_names,
            'venue': venue_name,
            'event_date': event_date
        })
    event_list = cleanArtists(event_list)
    return event_list

def create_bar_graph(data):
    venue_artist_count = defaultdict(set)  # Use a dictionary to store unique artists for each venue

    for event in data:
        venue = event['venue']
        for artist in event['artists']:
            venue_artist_count[venue].add(artist)

    # Transform the sets to their lengths to count unique artists per venue
    venue_artist_count = {venue: len(artists) for venue, artists in venue_artist_count.items()}

    # Get the top 10 venues with the most unique artists
    top_venues = Counter(venue_artist_count).most_common(10)

    # Unpack the top venues into two lists for plotting
    top_venue_names, top_venue_artist_counts = zip(*top_venues)

    plt.figure(figsize=(12, 8))
    plt.barh(top_venue_names, top_venue_artist_counts, color='skyblue')
    plt.xlabel('Number of Unique Artists')
    plt.ylabel('Venues')
    plt.title('Top 10 Venues by Number of Unique Artists Performed')
    plt.gca().invert_yaxis()  # Invert y-axis to show the highest count at the top
    plt.xticks(range(0, max(top_venue_artist_counts) + 1, 1))  # Set x-axis ticks to count by 1
    plt.tight_layout()
    plt.show()

def main():
    # Use the API key
    api_key = 'UQaRoP5fLCVe2MRA3UrheYt3GjeP9Smb'
    events_with_artists = get_us_music_events(api_key, pages=20)  # You can adjust the number of pages as needed

    for event in events_with_artists:
        print(f"Event: {event['event_name']}, Artists: {', '.join(event['artists'])}, Venue: {event['venue']}, Event Date: {event['event_date']}")   
from billboard import get_billboard_data, save_billboard_data
from spotify import get_billboard_track_spotify_data, get_spotify_artist_data, save_billboard_track_spotify_data, save_spotify_artist_data
from visualize import visualize_data
from process import process_data

def initialize_db():
    print('Initializing database...')
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    
    # Creating the Artists table
    c.execute('''
    CREATE TABLE IF NOT EXISTS Artists (
        artist_id INTEGER PRIMARY KEY AUTOINCREMENT,
        artist_name TEXT UNIQUE
    )
    ''')
    
    # Creating the BillboardTracks table
    c.execute('''
    CREATE TABLE IF NOT EXISTS BillboardTracks (
        billboard_track_id INTEGER PRIMARY KEY AUTOINCREMENT,
        artist_id INTEGER,
        track_name TEXT,
        FOREIGN KEY (artist_id) REFERENCES Artists (artist_id)
    )
    ''')
    
    # Creating the SpotifyArtistPopularity table
    c.execute('''
    CREATE TABLE IF NOT EXISTS SpotifyArtistData (
        artist_id INTEGER,
        genre TEXT,
        popularity INTEGER,
        FOREIGN KEY (artist_id) REFERENCES Artists (artist_id)
    )
    ''')
     
    # Creating the BillboardTrackPopularity table
    c.execute('''
    CREATE TABLE IF NOT EXISTS BillboardTrackData (
        billboard_track_id INTEGER,
        popularity INTEGER,
        duration INTEGER,
        FOREIGN KEY (billboard_track_id) REFERENCES BillboardTracks (billboard_track_id)
    )
    ''')

    conn.commit()
    conn.close()

def get_data():
    billboard_list = get_billboard_data()
    save_billboard_data(billboard_list)

    spotify_artist_data = get_spotify_artist_data()
    save_spotify_artist_data(spotify_artist_data)

    billboard_track_spotify_data = get_billboard_track_spotify_data()
    save_billboard_track_spotify_data(billboard_track_spotify_data)
    pass


def main():
    initialize_db()
    # get_data()
    # process_data()
    visualize_data()
    
    # Create the bar graph
    create_bar_graph(events_with_artists)

if __name__ == "__main__":
    main()