from flask import render_template, redirect
from flask import Blueprint
from flask_login import login_user
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

from models import User

class LoginForm(FlaskForm):
    email = StringField('メールアドレス')
    password = StringField('パスワード')
    submit = SubmitField('ログイン')

login_app = Blueprint('login', __name__)

@login_app.route('/login', methods=['GET','POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        if User.query.filter_by(email=form.email.data, password=form.password.data).one_or_none():
            user = User.query.filter_by(email=form.email.data).one_or_none()
            login_user(user)
            return redirect('/dashboard')
        else:
            return redirect('/login')

    return render_template('login.html', form=form)
