import datetime
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from models.Model import database

class User(database.Model, UserMixin):
    __tablename__ = 'dat_users'
    id = database.Column(database.Integer, primary_key=True)
    name = database.Column(database.Text())
    email = database.Column(database.Text())
    password = database.Column(database.Text())
    created_at = database.Column(database.DateTime, default=datetime.datetime.now)
    updated_at = database.Column(database.DateTime, default=datetime.datetime.now, onupdate=datetime.datetime.now)

    def __repr__(self):
        return "<User {0}, {1}>".format(self.name, self.email)

if __name__ == "__main__":
    pass