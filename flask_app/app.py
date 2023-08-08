import io
import os
import sys
from flask import Flask
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_seeder import FlaskSeeder
from views.dashboard import dashboard_pages
from views.auth import auth_pages
from views.index import index_pages
from views.user import user_pages
from models import User, database
import config

config.load_env() # 環境変数読み込み
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

app = Flask(__name__)

login_manager = LoginManager()
login_manager.init_app(app)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

app.config['SESSION_COOKIE_HTTPONLY'] = bool(os.getenv('SESSION_COOKIE_HTTPONLY'))
app.config['SESSION_COOKIE_SECURE'] = bool(os.getenv('SESSION_COOKIE_SECURE'))
app.config['PERMANENT_SESSION_LIFETIME'] = int(os.getenv('PERMANENT_SESSION_LIFETIME'))
app.config['SESSION_REFRESH_EACH_REQUEST'] = bool(os.getenv('SESSION_REFRESH_EACH_REQUEST'))

app.config['SQLALCHEMY_DATABASE_URI'] = "{}://{}:{}@{}/{}?charset={}".format(
    os.getenv('ENGINE'),
    os.getenv('USER'),
    os.getenv('PASSWORD'),
    os.getenv('DATABSE_HOST'),
    os.getenv('DATABASE_NAME'),
    os.getenv('CHARSET')
)

app.config['SQLALCHEMY_ECHO'] = bool(os.getenv('SQLALCHEMY_ECHO'))
database.init_app(app)
migrate = Migrate(app, database)
seeder = FlaskSeeder()
seeder.init_app(app, database)

# register blueprint
app.register_blueprint(index_pages)
app.register_blueprint(auth_pages)
app.register_blueprint(dashboard_pages)
app.register_blueprint(user_pages)

@login_manager.user_loader
def load_user(user_id): 
    return User.query.get(int(user_id))

if __name__ == "__main__":
    app.run(host=str(os.getenv('HOST')), port=int(os.getenv('PORT')), debug=bool(os.getenv('DEBUG')))