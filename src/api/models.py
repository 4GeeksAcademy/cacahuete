from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Song(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    artist = db.Column(db.String(120), nullable=False)
    genre = db.Column(db.String(80))
    bpm = db.Column(db.Integer)

    def __repr__(self):
        return f'<Song {self.title} by {self.artist}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "artist": self.artist,
            "genre": self.genre,
            "bpm": self.bpm
        }