from flask_sqlalchemy import SQLAlchemy
from server import app

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/matchups.db'

db = SQLAlchemy(app)