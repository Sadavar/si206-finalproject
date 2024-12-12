from collections import Counter
import json
import matplotlib.pyplot as plt
import sqlite3

def plot_hml_artist_popularity():
    # Read values from the JSON file
    with open('data.json', 'r') as f:
        data = json.load(f)

    # Extract data for plotting
    highest = data[0]['highest_popularity_data']
    lowest = data[1]['lowest_popularity_data']
    average = data[2]['average_popularity_data']

    artists = [highest['artist_name'], average['artist_name'], lowest['artist_name']]
    popularities = [highest['popularity'], average['popularity'], lowest['popularity']]

    # Create the bar chart
    plt.figure(figsize=(8, 6))
    bars = plt.bar(artists, popularities, color=['green', 'blue', 'red'])
    
    # Add labels and title
    plt.xlabel('Artist', fontsize=12)
    plt.ylabel('Popularity', fontsize=12)
    plt.title('Billboard Artist Spotify Popularity Score (Highest, Average, Lowest)', fontsize=14)

    # Annotate the bars with the popularity values
    for i, value in enumerate(popularities):
        plt.text(i, value + 1, str(value), ha='center', fontsize=10)
        
    # Save plot image
    plt.savefig('hml_artist_popularity.png')

    # Show the plot
    plt.tight_layout()
    plt.show()

def plot_top_10_spotify_artists_popularity():
    # Connect to the database
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    
    # Get the top 10 artists by popularity
    c.execute('''
        SELECT artist_name, popularity
        FROM SpotifyArtistData
        JOIN Artists ON SpotifyArtistData.artist_id = Artists.artist_id
        ORDER BY popularity DESC
        LIMIT 10
    ''')
    
    data = c.fetchall()
    conn.close()
    
    # Extract the artist names and popularity values
    artists = [row[0] for row in data]
    popularities = [row[1] for row in data]
    
    # Create the bar chart
    plt.figure(figsize=(12, 6))
    bars = plt.bar(artists, popularities, color='skyblue')
    
    # Add labels and title
    plt.xlabel('Artist', fontsize=12)
    plt.ylabel('Popularity', fontsize=12)
    plt.title('Top 10 Billboard Artists by Spotify Popularity', fontsize=14)
    
    # Save plot image
    plt.savefig('top_10_spotify_artists_popularity.png')
    
    # Show the plot
    plt.tight_layout()
    plt.show()

def plot_ticketmaster_top3venues():
    # Connect to the database
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    
    # Get number of events per venue
    c.execute('''
        SELECT venue, COUNT(*) as num_events
        FROM TicketmasterEvents
        GROUP BY venue
        ORDER BY num_events DESC
        LIMIT 3
    ''')
    
    data = c.fetchall()
    conn.close()
    
    # Extract the venue names and number of events
    venues = [row[0] for row in data]
    num_events = [row[1] for row in data]
    
    # Create the bar chart
    plt.figure(figsize=(12, 6))
    bars = plt.bar(venues, num_events, color='salmon')
    
    # Add labels and title
    plt.xlabel('Venue', fontsize=12)
    plt.ylabel('Number of Events', fontsize=12)
    plt.title('Top 5 Ticketmaster Venues by Number of Events', fontsize=14)
    
    # Save plot image
    plt.savefig('top_5_ticketmaster_venues.png')
    
    # Show the plot
    plt.tight_layout()
    plt.show()

def plot_events_per_month():
    # Connect to the database
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    
    # Get event dates
    c.execute('''
        SELECT event_date
        FROM TicketmasterEvents
    ''')
    
    data = c.fetchall()
    conn.close()
    
    # Extract the event dates
    event_dates = [row[0] for row in data]
    
    # Count the number of events per month
    event_months = [date.split('-')[1] for date in event_dates]
    event_month_counts = Counter(event_months)
    
    # check if any months dont have data, set to 0
    print(event_month_counts)
    # 01 02 03

    for i in range(1, 13):
        if str(i).zfill(2) not in event_month_counts:
            event_month_counts[str(i).zfill(2)] = 0
    
    # Sort the months
    event_month_counts = {month: event_month_counts[month] for month in sorted(event_month_counts.keys())}
    
    # Create the bar chart
    plt.figure(figsize=(12, 6))
    bars = plt.bar(event_month_counts.keys(), event_month_counts.values(), color='skyblue')
    
    # Add labels and title
    plt.xlabel('Month', fontsize=12)
    plt.ylabel('Number of Events', fontsize=12)
    plt.title('Number of Ticketmaster Events per Month', fontsize=14)
    
    # Save plot image
    plt.savefig('events_per_month.png')
    
    # Show the plot
    plt.tight_layout()
    plt.show()

def visualize_data():
    print('Visualizing data...')
    
    # Plot each chart sequentially
    plot_hml_artist_popularity()
    plot_top_10_spotify_artists_popularity()
    plot_ticketmaster_top3venues()
    plot_events_per_month()

