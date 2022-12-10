from flask import Blueprint, request, render_template, redirect, url_for
from flask_login import login_user, logout_user
from flask_wtf import FlaskForm
from werkzeug.security import check_password_hash
from wtforms import StringField, SubmitField, PasswordField, validators
from models import User

auth_pages = Blueprint('auth', __name__, template_folder='templates')

class LoginForm(FlaskForm):
    email = StringField('メールアドレス', validators=[validators.InputRequired(), validators.Length(max=256)])
    password = PasswordField('パスワード', validators=[validators.InputRequired(), validators.Length(max=128)])
    submit = SubmitField('ログイン')

@auth_pages.route('/login', methods=["GET", "POST"])
def login():
    form = LoginForm()
    if request.method == "GET":
        return render_template('login.html', form=form)

    if request.method == "POST":
        if form.validate_on_submit():
            user = User.query.filter_by(email=form.email.data).first()
            if user is not None and check_password_hash(user.password, form.password.data):
                login_user(user)
                return redirect(url_for("dashboard.dashboard"))
            else:
                return redirect(url_for("auth.login"))
        else:
            return redirect(url_for("auth.login"))

@auth_pages.route('/logout', methods=["GET"])
def logout():
    logout_user()
    return redirect(url_for("index.index"))