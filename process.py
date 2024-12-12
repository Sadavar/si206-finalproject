import sqlite3

def process_data():
    print('Processing data...')
    conn = sqlite3.connect('data.db')
    c = conn.cursor()

    # get highest popularity in SpotifyArtistData, and the artist name
    c.execute('''
        SELECT artist_name, popularity
        FROM SpotifyArtistData
        JOIN Artists ON SpotifyArtistData.artist_id = Artists.artist_id
        WHERE popularity = (SELECT MAX(popularity) FROM SpotifyArtistData)
    ''')
    data = c.fetchall()

    highest_data = {
        'highest_popularity_data': {
            
            'artist_name': data[0][0],
            'popularity': data[0][1]
        }
    }

    # get lowest popularity in SpotifyArtistData
    c.execute('''
        SELECT artist_name, popularity
        FROM SpotifyArtistData
        JOIN Artists ON SpotifyArtistData.artist_id = Artists.artist_id
        WHERE popularity = (SELECT MIN(popularity) FROM SpotifyArtistData)
    ''')
    data = c.fetchall()
    print(data)

    lowest_data = {
        'lowest_popularity_data': {
            'artist_name': data[0][0],
            'popularity': data[0][1] 
        }
    }
    
    # get average popularity in SpotifyArtistData
    c.execute('''
        SELECT AVG(popularity)
        FROM SpotifyArtistData
    ''')
    data = c.fetchone()
    print(data)
    
    average_data = {
        'average_popularity_data': {
            'artist_name': 'Average ',
            'popularity': data[0]
        }
    }

    conn.close()

    # print data to json
    import json
    with open('data.json', 'w') as f:
        json.dump([highest_data, lowest_data, average_data], f, indent=4)

        
    