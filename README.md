#### flask_in_docker
Flask application in a Docker environment.<br>
Powered by nginx and uWSGI.

![sample](https://user-images.githubusercontent.com/13768156/74453792-410bb980-4ec6-11ea-817c-5dbbb2478a95.jpg)

---

#### 🖥Environment
* Docker Images
  * ubuntu:20.04
  * mysql:8.0 

* Python Packages
  * flask==2.2.2
  * Flask-Login==0.6.2
  * Flask-WTF==1.0.1
  * Flask-Migrate==4.0.0
  * Flask-Seeder==2.1.1
  * PyMySQL==1.0.2
  * flask-sqlalchemy==3.0.2
  * cryptography==38.0.4
  * uWSGI==2.0.21

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
$ flask db migrate & flask db upgrade
```
5. Execute Database seeding.
```bash
$ flask seed run
```
---

### 📝Author
* [omachi-satoshi](https://github.com/omachi-satoshi)
* [obemaru4012](https://github.com/obemaru4012)
