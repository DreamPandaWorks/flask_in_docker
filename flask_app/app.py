from flask import Flask, render_template, redirect
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_seeder import FlaskSeeder
from views.dashboard import dashboard_pages
from views.auth import auth_pages
from views.index import index_pages

import config
from models import User, database

app = Flask(__name__)

login_manager = LoginManager()
login_manager.init_app(app)
app.config['SECRET_KEY'] = "secret"
app.config['SQLALCHEMY_DATABASE_URI'] = config.SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_ECHO'] = True
database.init_app(app)
migrate = Migrate(app, database)
seeder = FlaskSeeder()
seeder.init_app(app, database)

# register blueprint
app.register_blueprint(index_pages)
app.register_blueprint(auth_pages)
app.register_blueprint(dashboard_pages)

@login_manager.user_loader
def load_user(user_id): 
    return User.query.get(int(user_id))

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5001, debug=True)