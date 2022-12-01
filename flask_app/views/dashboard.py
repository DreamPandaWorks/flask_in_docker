from flask import Blueprint, render_template
from flask_login import login_required

dashboard_pages = Blueprint('dashboard', __name__, template_folder='templates')

@dashboard_pages.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html')