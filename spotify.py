import os
import requests
import base64
import sqlite3

from dotenv import load_dotenv 
load_dotenv()

def get_spotify_token():
    client_id = os.getenv("SPOTIFY_CLIENT_ID")
    client_secret = os.getenv("SPOTIFY_CLIENT_SECRET")

    auth_str = f"{client_id}:{client_secret}"
    auth_bytes = auth_str.encode('utf-8')
    auth_base64 = base64.b64encode(auth_bytes).decode('utf-8')
    
    headers = {
        'Authorization': f'Basic {auth_base64}'
    }
    
    data = {
        'grant_type': 'client_credentials'
    }
    
    response = requests.post('https://accounts.spotify.com/api/token', headers=headers, data=data)
    
    if response.status_code == 200:
        token = response.json()['access_token']
        return token
    else:
        print('Failed to get token:', response.text)
        exit(1)


def get_spotify_artist_data():
    print('Getting Spotify artist data...')
    token = get_spotify_token()
    
    search_url = 'https://api.spotify.com/v1/search'
    headers = {
        'Authorization': f'Bearer {token}'
    }
    
    # get artists from DB
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    c.execute('SELECT artist_name FROM Artists')
    artists = c.fetchall()
    conn.close()

    # check how many artists are in the spotify artist data currently
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    c.execute('SELECT COUNT(*) FROM SpotifyArtistData')
    stored_artists_count = c.fetchone()[0]
    conn.close()

    spotify_artist_data = []
    
    num_added = 0
    for artist in artists[stored_artists_count:]:
        if num_added >= 25:
            break
        print(f'Searching Spotify for {artist[0]}...')
        params = {
            'q': artist[0],
            'type': 'artist',
            'limit': 5
        }
        try: 
            response = requests.get(search_url, headers=headers, params=params)
            spotify_data = response.json()['artists']['items']
            genre = spotify_data[0]['genres'][0]
            popularity = spotify_data[0]['popularity']
            
            spotify_artist_data.append({
                'artist_name': artist[0],
                'genre': genre,
                'popularity': popularity
            })
            num_added += 1
        except:
            print('No data found for artist:', artist[0])
    
    return spotify_artist_data

def save_spotify_artist_data(spotify_artist_data):
    print('Saving Spotify artist data...')
    conn = sqlite3.connect('data.db')
    c = conn.cursor()

    for artist in spotify_artist_data:
        c.execute('''
            INSERT INTO SpotifyArtistData (artist_id, genre, popularity)
            SELECT artist_id, ?, ?
            FROM Artists
            WHERE artist_name = ?
        ''', (artist['genre'], artist['popularity'], artist['artist_name']))
    
    conn.commit()
    conn.close()

def get_billboard_track_spotify_data():
    print('Getting Spotify data for Billboard tracks...')
    # get billboard tracks
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    # get all billboard_track ids from the database
    c.execute('SELECT billboard_track_id FROM BillboardTracks')
    billboard_track_ids = c.fetchall()
    conn.close()
    
    # get spotify data for each track
    token = get_spotify_token()
    search_url = 'https://api.spotify.com/v1/search'
    headers = {
        'Authorization': f'Bearer {token}'
    }

    # find how many tracks are already in the database
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    c.execute('SELECT COUNT(*) FROM BillboardTrackData')
    stored_tracks_count = c.fetchone()[0]
    
    
    spotify_data = []
    num_added = 0
    for id in billboard_track_ids[stored_tracks_count:]:
        id = id[0]
        if num_added >= 25:
            break
        # get track name
        c.execute('SELECT track_name FROM BillboardTracks WHERE billboard_track_id = ?', (id,))
        track = c.fetchone()
        print(f'Searching Spotify for {track[0]}...')
        params = {
            'q': track[0],
            'type': 'track',
            'limit': 1
        }
        response = requests.get(search_url, headers=headers, params=params)
        try:
            spotify_track_data = response.json()['tracks']['items'][0]
            popularity = spotify_track_data['popularity']
            duration = spotify_track_data['duration_ms']
            print(f'Found {track[0]} with popularity {popularity} and duration {duration}')
            spotify_data.append({
                'billboard_track_id': id,
                'popularity': popularity,
                'duration': duration
            })

            num_added += 1
        except:
            print('No data found for track:', track[0])
        
    
    print(spotify_data)
    return spotify_data
    
    
def save_billboard_track_spotify_data(spotify_data):
    print('Saving Spotify data for Billboard tracks...')
    conn = sqlite3.connect('data.db')
    c = conn.cursor()

    for track in spotify_data:
        c.execute('''
            INSERT INTO BillboardTrackData (billboard_track_id, popularity, duration)
            VALUES (?, ?, ?)
        ''', (track['billboard_track_id'], track['popularity'], track['duration']))
    
    conn.commit()
    conn.close() 