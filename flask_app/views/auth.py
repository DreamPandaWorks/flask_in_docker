from flask import Blueprint, request, render_template, redirect
from flask_login import login_user
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from models import User

auth_pages = Blueprint('auth', __name__, template_folder='templates')

class LoginForm(FlaskForm):
    email = StringField('メールアドレス')
    password = StringField('パスワード')
    submit = SubmitField('ログイン')

@auth_pages.route('/login', methods=["GET", "POST"])
def login():
    form = LoginForm()
    if request.method == "GET":
        return render_template('login.html', form=form)

    if request.method == "POST":
        if form.validate_on_submit():
            if User.query.filter_by(email=form.email.data, password=form.password.data).one_or_none():
                user = User.query.filter_by(email=form.email.data).one_or_none()
                login_user(user)
                return redirect('/dashboard')
            else:
                return redirect('/login')

