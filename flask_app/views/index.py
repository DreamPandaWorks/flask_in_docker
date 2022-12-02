from flask import Blueprint, render_template

index_pages = Blueprint('index', __name__, template_folder='templates')

@index_pages.route('/', methods=["GET"])
def index():
    return render_template('index.html')