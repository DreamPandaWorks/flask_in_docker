from flask_seeder import Seeder, Faker, generator
from werkzeug.security import generate_password_hash
from models import User

# User Seeder
class UserSeeder(Seeder):
    def run(self):
        faker = Faker(cls=User, 
                      init={"id": generator.Sequence(), 
                            "name": generator.String("[a-z]{5}"), 
                            "email": generator.String("[a-z]{5}@protonmail.com"), 
                            "password": generate_password_hash("password", method='sha256')})

        for user in faker.create(10):
            self.db.session.add(user)