from flask import Blueprint, flash, request, render_template, redirect, url_for
from flask_login import login_user, logout_user
from flask_wtf import FlaskForm
from werkzeug.security import check_password_hash, generate_password_hash
from wtforms import EmailField, StringField, SubmitField, PasswordField, validators
from models import User, database

auth_pages = Blueprint('auth', __name__, template_folder='templates')

class RegisterForm(FlaskForm):
    """ユーザー新規登録フォーム

    Args:
        FlaskForm (FlaskForm): ユーザー新規登録フォーム。
    """
    email = EmailField('メールアドレス', validators=[validators.InputRequired(message='メールアドレスを入力してください。'), validators.Length(max=256, message='256文字以内で入力してください。'), validators.Email(message="有効なメールアドレスを入力してください。")])
    user_name = StringField('ユーザー名', validators=[validators.InputRequired(message='ユーザー名を入力してください。'), validators.Length(min=4, max=64)])
    password = PasswordField('パスワード', validators=[validators.InputRequired(message='パスワードを入力してください。'), validators.Length(min=8, max=128)])
    submit = SubmitField('ログイン')

@auth_pages.route('/register', methods=["GET", "POST"])
def register():
    form = RegisterForm()
    if request.method == "GET":
        return render_template('register.html', form=form)

    if request.method == "POST":
        if form.validate_on_submit():
            user = User.query.filter_by(email=form.email.data).first()
            if user is None:
                user = User(email = form.email.data, name = form.user_name.data, password = generate_password_hash(form.password.data, method = "sha256"))
                database.session.add(user)
                database.session.commit()
                login_user(user)
                return redirect(url_for("dashboard.dashboard"))
            else:
                flash("登録済みのメールアドレスです。", "failure")
                return render_template('register.html', form=form)
        else:
            return redirect(url_for("auth.register"))

class LoginForm(FlaskForm):
    """ログインフォーム

    Args:
        FlaskForm (FlaskForm): ログインフォーム。
    """
    email = EmailField('メールアドレス', validators=[validators.InputRequired(message='メールアドレスを入力してください。'), validators.Length(max=256), validators.Email(message="有効なメールアドレスを入力してください。")])
    password = PasswordField('パスワード', validators=[validators.InputRequired(message='パスワードを入力してください。'), validators.Length(max=128)])
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
                flash("ログインしました。", "success")
                return redirect(url_for("dashboard.dashboard"))
            else:
                flash("ログインに失敗しました。", "failure")
                return render_template("login.html", form=form)
        else:
            return render_template("login.html", form=form)

@auth_pages.route('/logout', methods=["GET"])
def logout():
    logout_user()
    return redirect(url_for("index.index"))