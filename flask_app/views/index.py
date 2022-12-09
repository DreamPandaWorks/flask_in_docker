from flask import Blueprint, render_template, redirect, url_for
from flask_login import current_user

index_pages = Blueprint('index', __name__, template_folder='templates')

@index_pages.route('/', methods=["GET"])
def index():
    if current_user.is_authenticated:
        return redirect(url_for("dashboard.dashboard"))
    else:
        return render_template('index.html')