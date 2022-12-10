from flask_seeder import Seeder
from werkzeug.security import generate_password_hash
from models import User

# User Seeder
class UserSeeder(Seeder):
    def run(self):
        for i in range(1, 11):
            user = User(id = i, name = "ユーザー_{}".format(i), email = "user_{}@sample.com".format(i), password = generate_password_hash("password", method = "sha256"))
            self.db.session.add(user)
