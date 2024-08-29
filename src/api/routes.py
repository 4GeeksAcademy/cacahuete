"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Song
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from random import choice

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/suggest-song', methods=['GET'])
def suggest_song():
    # Aquí iría la lógica para sugerir una canción
    # Por ahora, solo devolveremos una canción aleatoria de la base de datos
    songs = Song.query.all()
    if songs:
        suggested_song = choice(songs)
        return jsonify({
            "success": True,
            "song": {
                "title": suggested_song.title,
                "artist": suggested_song.artist
            }
        }), 200
    else:
        return jsonify({
            "success": False,
            "message": "No songs available"
        }), 404