from flask import Blueprint, flash, redirect, render_template, request, url_for
from flask_login import login_required, current_user
from flask_wtf import FlaskForm
from wtforms import StringField, SearchField, PasswordField, SubmitField, validators, ValidationError
from werkzeug.security import check_password_hash, generate_password_hash
from models import User, database

user_pages = Blueprint('', __name__, template_folder='templates')

class UsersSearchForm(FlaskForm):
    """ユーザー検索フォーム

    Args:
        FlaskForm (FlaskForm): ユーザー検索フォーム。
    """
    si = SearchField()
    reset = SubmitField('リセット')

@user_pages.route('/users')
@login_required
def users():
    form = UsersSearchForm()
    users = []
    
    si = request.args.get("si")
    if si is not None:
        form.si.data = si
        users = User.query.filter(User.name.like("%{}%".format(si))).all()
    else:
        users = User.query.all()
    
    return render_template('users.html', form = form, users = users, si = si)

class UserEditForm(FlaskForm):
    """ユーザー情報編集フォーム

    Args:
        FlaskForm (FlaskForm): ユーザー情報編集フォーム。
    """
    user_name = StringField('ユーザー名', validators=[validators.InputRequired(message='ユーザー名を入力してください。'), validators.Length(min=4, max=64)])
    old_password = PasswordField('現在のパスワード', validators=[validators.Length(max=128, message="パスワードは128文字以内で入力してください。")])
    new_password = PasswordField('新しいパスワード', validators=[validators.Length(max=128, message="パスワードは128文字以内で入力してください。")])
    submit = SubmitField('更新')

@user_pages.route('/user', methods=["GET", "POST"])
@login_required
def user():
    form = UserEditForm()
    if request.method == "GET":
        user = current_user
        form.user_name.data = user.name
        return render_template('user.html', form = form)

    if request.method == "POST":
        if form.validate_on_submit():
            user = current_user
            user = User.query.filter_by(id = user.id).first()
            if user is None:
                flash("ユーザーが見つかりません。")
                return redirect(url_for("user"))
            
            if not check_password_hash(user.password, form.old_password.data):
                flash("現在のパスワードが一致しません。")
                return redirect(url_for("user"))
            
            # ユーザー名は絶対更新
            user.name = form.user_name.data
            
            # パスワード
            new_password = form.new_password.data
            if new_password != "":
                user.password = generate_password_hash(new_password, method = "sha256")
            database.session.commit()
            
            flash("ユーザー情報を更新しました。")
            return redirect(url_for("user"))
        else:
            return render_template('user.html', form = form)