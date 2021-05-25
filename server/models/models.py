from server.app import db

class Matchup(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    away_team = db.Column(db.String(50))
    home_team = db.Column(db.String(50))
    location = db.Column(db.String(50))
    stadium = db.Column(db.String(50))
    date_time = db.Column(db.DateTime)