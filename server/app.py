from flask import Flask
from server.clients.schedule_client import ScheduleClient

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return 'Hello World'

@app.route('/schedule', methods=['GET'])
def schedule():
    schedule_client = ScheduleClient()
    schedule_client.set_one_week_schedule()
    return 'schedule'

@app.route('/upload', methods=['POST'])
def upload_image(image):
    pass