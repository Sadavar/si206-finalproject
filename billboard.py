
import re
import sqlite3
from bs4 import BeautifulSoup
import requests


# def cleanBillboard(billboard_list):
#     print("Cleaning Billboard Hot 100")
#     # list of [id, title, artist]
#     for data in billboard_list:
#         prev_artist = data[1]
#         new_artist = re.search("(.+)(?:\&\|,|Featuring)", prev_artist)
#         print("prev_artist: ", prev_artist)
#         print("new_artist: ", new_artist)
#     return billboard_list

def cleanBillboard(billboard_list):
    print("Cleaning Billboard Hot 100")
    for data in billboard_list:
        print("data: ", data)
        artist = data[1]
        if "Featuring" in artist or "," in artist or "&" in artist or "And" in artist or "With" in artist:
            match = re.match(r"(.+?)(?:&|,|Featuring|And|With)", artist)
            if match:
                artist = match.group(1).strip()
                data[1] = artist  # Update the artist name in the list
    return billboard_list


def get_billboard_data():
    print("Getting Billboard Hot 100")
    url = "https://www.billboard.com/charts/hot-100"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    
    chart_list = soup.find("div", class_="chart-results-list")
    items = chart_list.find_all("div", class_="o-chart-results-list-row-container")

    billboard_list = []
    for item in items:
        try:
            ul = item.find("ul")
            li = ul.find_all("li")[3]
            title = li.find("h3").text.strip()
            artist = li.find("span").text.strip()
            billboard_list.append([title, artist])
        except Exception as e:
            print("Error scraping billboard 100:", e)
    billboard_list = cleanBillboard(billboard_list)
    return billboard_list

def save_billboard_data(billboard_list):
    print("Saving Billboard Hot 100")
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    
   # Get the number of already stored tracks
    c.execute('SELECT COUNT(*) FROM BillboardTracks')
    stored_tracks_count = c.fetchone()[0]

    if stored_tracks_count >= 100:
        print("Database already contains 100 items. No more data will be added.")
        conn.close()
        return

    # Limit the number of items to insert
    num_added = 0
    for track_name, artist_name in billboard_list[stored_tracks_count:]:
        if num_added >= 25:
            break
        print(f"Adding {track_name} by {artist_name} to the database.")
        # Insert the artist if not already in the database
        c.execute('INSERT OR IGNORE INTO Artists (artist_name) VALUES (?)', (artist_name,))
        # Get the artist_id
        c.execute('SELECT artist_id FROM Artists WHERE artist_name = ?', (artist_name,))
        artist_id = c.fetchone()[0]
        # Insert the track
        c.execute('INSERT OR IGNORE INTO BillboardTracks (artist_id, track_name) VALUES (?, ?)', (artist_id, track_name))
        num_added += 1
    
    conn.commit()
    conn.close()
    print(f"Successfully saved {num_added} new items to the database.")
