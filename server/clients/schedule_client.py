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
            rows = soup.find_all('tr')
            row_item = []
            for row in rows:
                data_items = row.find_all('td')

                for data_item in data_items:
                    if 'tickets' in data_item.get('class', {}) or 'network' in data_item.get('class', {}):
                        continue

                    teams = data_item.find_all('a', class_='team-name')
                    for team in teams:
                        row_item.append(team.text.split(' ')[-1])
                    if 'schedule-location' in data_item.get('class', {}):
                        schedule_location = data_item.text.split(', ')
                        row_item.append(schedule_location[0])
                        row_item.append(schedule_location[1])
                    elif not data_item.text.strip():
                        date = data_item.get('data-date')
                        if date:
                            row_item.append(date)

                if len(row_item):
                    self.one_week_schedule.append(row_item)
                row_item = []