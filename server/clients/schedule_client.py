import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse
from serializers.schedule_serializer import ScheduleSerializer


class ScheduleClient:
    def __init__(self):
        self.domain = f'https://www.espn.com/nfl/schedule/'
        self.one_week_schedule = []

    def set_one_week_schedule(self):
        response = requests.get(self.get_url())
        soup = BeautifulSoup(response.text, 'lxml')
        self.parse_soup(soup)
        return ScheduleSerializer(self.one_week_schedule).serialize()

    def get_url(self, path=None):
        return f"{self.domain}/{path}" if path else self.domain

    def parse_soup(self, soup):
            tables = soup.find_all('table', class_="schedule")
            for table in tables:
                rows = table.find_all('tr')
                for row in rows:
                    row_items = []
                    items = row.find_all('td')
                    for item in items:
                        date = item.get('data-date')
                        if 'tickets' in item.get('class', {}) or 'network' in item.get('class', {}):
                            continue
                        else:
                            if len(item.text):
                                row_items.append(item.text)
                            if date:
                                row_items.append(date)
                    if len(row_items):
                        self.one_week_schedule.append(row_items)
            
        
                   