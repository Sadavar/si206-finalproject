import matplotlib.pyplot as plt
import sqlite3

def visualize_data():
    print('Visualizing data...')
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    
    # Visualization: Billboard vs Spotify track counts per artist
    c.execute('''
        SELECT a.artist_name, 
               COUNT(DISTINCT b.billboard_track_id) AS billboard_count, 
               COUNT(DISTINCT s.track_id) AS spotify_count
        FROM Artists a
        LEFT JOIN BillboardTracks b ON a.artist_id = b.artist_id
        LEFT JOIN SpotifyTracks s ON a.artist_id = s.artist_id
        GROUP BY a.artist_id
    ''')
    data = c.fetchall()
    
    artist_names, billboard_counts, spotify_counts = zip(*data)
    x = range(len(artist_names))

    plt.figure(figsize=(14, 7))
    plt.bar(x, billboard_counts, width=0.4, label='Billboard Tracks', align='center')
    plt.bar(x, spotify_counts, width=0.4, label='Spotify Tracks', align='edge')
    
    plt.xlabel('Artists')
    plt.ylabel('Number of Tracks')
    plt.title('Number of Tracks per Artist on Billboard Hot 100 vs Spotify')
    plt.xticks(x, artist_names, rotation=90)
    plt.legend()
    plt.tight_layout()
    plt.savefig('Billboard_vs_Spotify_Visualization.png')
    plt.show()
    
    conn.close()
