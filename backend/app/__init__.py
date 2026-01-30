from flask import Flask
from flask_cors import CORS
from app.routes.auth import auth
from app import db

def create_app ():
    app = Flask(__name__)
    app.config["SECRET_KEY"]="my-secret-key"
    CORS(app)
    app.register_blueprint(auth)
    return app 