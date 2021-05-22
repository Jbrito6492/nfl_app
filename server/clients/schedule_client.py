import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse
from flask import jsonify


class ScheduleClient:
    def __init__(self):
        self.domain = f'https://www.espn.com/nfl/schedule/'
        self.one_week_schedule = []

    def set_one_week_schedule(self):
        response = requests.get(self.get_url())
        soup = BeautifulSoup(response.text, 'lxml')
        self.parse_soup(soup)
        print(self.one_week_schedule)
        jsonify({})

    def get_url(self, path=None):
        return f"{self.domain}/{path}" if path else self.domain

    def parse_soup(self, soup):
        tables = soup.find_all('table', class_="schedule")
        for table in tables:
            rows = soup.find_all('tr')
            row_item = []
            for row in rows:
                data_items = row.find_all('td')

                for data_item in data_items:
                    if 'tickets' in data_item.get('class', {}):
                        continue
                    elif not data_item.text.strip():
                        date = data_item.get('data-date')
                        if date:
                            row_item.append(date)
                    elif data_item:
                        row_item.append(data_item.text)

                if len(row_item):
                    self.one_week_schedule.append(row_item)
                row_item = []