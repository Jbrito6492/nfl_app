from flask import Flask

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return 'Hello World'

@app.route('/schedule')
def schedule():
    return 'schedule'

@app.route('/upload', methods=['POST'])
def upload_image(image):
    pass