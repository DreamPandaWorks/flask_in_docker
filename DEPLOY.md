#### flask_in_docker

Flask application in a Docker environment.
Powered by nginx and uWSGI.

![image](https://user-images.githubusercontent.com/88951380/206355413-a1a78de5-d3e5-462d-a174-7ed073af836a.png)

---

#### 🖥Environment

- Docker Images

  - ubuntu:20.04
  - mysql:8.0

- Python Packages（in requirements.txt）
  - flask==2.2.2
  - Flask-Login==0.6.2
  - Flask-WTF==1.0.1
  - Flask-Migrate==4.0.0
  - Flask-Seeder==1.2.0
  - PyMySQL==1.0.2
  - flask-sqlalchemy==3.0.2
  - cryptography==38.0.4
  - uWSGI==2.0.21

---

#### 👩‍💻Setup

1. Build services.

```bash
$ docker-compose build
```

2. Create and start a containers.

```bash
$ docker-compose up -d
```

3. Enter the 「web」container.

```bash
$ docker-compose exec web bash
```

4. Execute Database migration.

```bash
$ flask db init
$ flask db migrate
$ flask db upgrade
```

5. Execute Database seeding.

```bash
$ flask seed run
```

---

#### 🧰Usage

- Default user's login attribute is <b>user_1@sample.com / password</b>.
- See [this document](https://github.com/omachi-satoshi) for information on how to deploy to a production environment(for AWS EC2 Ubuntu20.04).

---

#### 📝Author

- [omachi-satoshi](https://github.com/omachi-satoshi)
- [obemaru4012](https://github.com/obemaru4012)
