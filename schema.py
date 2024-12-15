import json
import sqlite3

def get_num_rows():
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    # Get the list of all table names
    c.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = c.fetchall()  # Fetch the table names
    total = 0 
    # Iterate over each table and count the rows
    for table in tables:
        table_name = table[0]
        c.execute(f"SELECT COUNT(*) FROM {table_name};")
        row_count = c.fetchone()[0]
        total += row_count
    
    return total


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

    # Creating the Event Names table
    c.execute('''
    CREATE TABLE IF NOT EXISTS Events (
        event_name_id INTEGER PRIMARY KEY AUTOINCREMENT,
        event_name TEXT
    )
    ''')
    
    # Creating the Venue Names table
    c.execute('''
    CREATE TABLE IF NOT EXISTS Venues (
        venue_name_id INTEGER PRIMARY KEY AUTOINCREMENT,
        venue_name TEXT
    )
    ''')
    
    # Creating the TicketmasterEvents table
    c.execute('''
    CREATE TABLE IF NOT EXISTS TicketmasterEvents (
        event_id INTEGER PRIMARY KEY AUTOINCREMENT,
        event_name_id INTEGER,
        artist_id INTEGER,
        venue_name_id INTEGER,
        event_date DATE NOT NULL,
        FOREIGN KEY (event_name_id) REFERENCES Events (event_name_id),
        FOREIGN KEY (venue_name_id) REFERENCES Venues (venue_name_id),
        FOREIGN KEY (artist_id) REFERENCES Artists (artist_id)
    )
    ''')

    conn.commit()
    conn.close()
