import base64
import requests
from bs4 import BeautifulSoup
import re
import os
import csv



def cleanBillboard(billboard_list):
    # list of [id, title, artist]
    for i in billboard_list:
        billboard_list[i][1] = re.search("(.+)(?:\&\|,|Featuring)", billboard_list[i][1])
    return billboard_list


def scrapeBillboard():
    
    print("Scraping Billboard Hot 100")
    url = "https://www.billboard.com/charts/hot-100"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    chart_list = soup.find("div", class_="chart-results-list")
    items = chart_list.find_all("div", class_="o-chart-results-list-row-container")

    billboard_list = []
    id = 1
    for item in items:
        try:
            ul = item.find("ul")
            li = ul.find_all("li")[3]
            ul = li.find("ul")

            title = li.find("h3").text.strip()
            artist = li.find("span").text.strip()
            print(title, artist)

            billboard_list.append([id, title, artist])
            id += 1
        except:
            print("Erroring scraping 100")
            exit(1)
    
    billboard_list = cleanBillboard(billboard_list)
    return billboard_list



    
def getSpotify():
    client_id = "fd5eae8a9f5d4390b801c425afb2105b"
    client_secret = "bf6010fd039045aabb9fdc7db9df333b"

    # Encode client ID and secret
    auth_str = f"{client_id}:{client_secret}"
    auth_bytes = auth_str.encode('utf-8')
    auth_base64 = base64.b64encode(auth_bytes).decode('utf-8')

    # Define the request headers and body
    headers = {
        'Authorization': f'Basic {auth_base64}'
    }

    data = {
        'grant_type': 'client_credentials'
    }

    # Make the POST request
    response = requests.post('https://accounts.spotify.com/api/token', headers=headers, data=data)

    # Parse the response and extract the token if successful
    if response.status_code == 200:
        token = response.json().get('access_token')
        print(f"Access token: {token}")
    else:
        print(f"Error: {response.status_code}, {response.text}")
        exit(1)
    
    search_url = 'https://api.spotify.com/v1/search'
    headers = {
        'Authorization': f'Bearer {token}'
    }
    params = {
        'q': 'Drake',
        'type': 'artist',
        'limit': 5
    }
    
    response = requests.get(search_url, headers=headers, params=params)
    print(response.json())

    
    


def main():
    getSpotify()
    exit(1)
    ##getEvents("Drake")
    scrapeBillboard()

    return
    

    billboard_list = scrapeBillboard()
    print(billboard_list)
    

if __name__ == "__main__":
    main()
