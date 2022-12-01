from flask_seeder import Seeder, Faker, generator
from models import User

# All seeders inherit from Seeder
class UserSeeder(Seeder):
    def run(self):
        faker = Faker(cls=User, 
                      init={"id": generator.Sequence(), 
                            "name": generator.String("[a-z]{5}"), 
                            "email": generator.String("[a-z]{5}@protonmail.com"), 
                            "password": "password"})

        for user in faker.create(5):
            self.db.session.add(user)