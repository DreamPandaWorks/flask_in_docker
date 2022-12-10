from flask import Blueprint, render_template
from flask_login import login_required
from models import User, database

user_pages = Blueprint('', __name__, template_folder='templates')

@user_pages.route('/users')
@login_required
def users():
    users = User.query.all()
    return render_template('users.html', users = users)

@user_pages.route('/user')
@login_required
def user():
    return render_template('user.html')