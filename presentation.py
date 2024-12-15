import json
import sqlite3
import matplotlib.pyplot as plt
from collections import Counter, defaultdict
from billboard import get_billboard_data, save_billboard_data 
from spotify import get_billboard_track_spotify_data, get_spotify_artist_data, save_billboard_track_spotify_data, save_spotify_artist_data
from ticketmaster import get_ticketmaster_data, save_ticketmaster_data
from visualize import visualize_data
from process import process_data
from schema import get_num_rows, initialize_db


def get_data():
    billboard_list = get_billboard_data()
    save_billboard_data(billboard_list)

    spotify_artist_data = get_spotify_artist_data()
    save_spotify_artist_data(spotify_artist_data)

    billboard_track_spotify_data = get_billboard_track_spotify_data()
    save_billboard_track_spotify_data(billboard_track_spotify_data)

    event_list = get_ticketmaster_data()
    save_ticketmaster_data(event_list)
    
    pass

def main():
    initialize_db()
    prev_total_rows = get_num_rows()
    get_data()
    process_data()
    after_total_rows = get_num_rows()
    print('TOTAL NUMBER OF ROWS ADDED TO DB:',  after_total_rows - prev_total_rows)
    print("TOTAL #ROWS IN DB", after_total_rows)
    visualize_data()
    pass


if __name__ == "__main__":
    main()