import base64
import sqlite3
import requests
from bs4 import BeautifulSoup
import re
import os
import csv
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
    

if __name__ == "__main__":
    main()
