FROM ubuntu:20.04

# Project dir
WORKDIR /var/www/flask_in_docker/flask_app

# set env
ENV DEBIAN_FRONTEND noninteractive

# install lib
RUN apt-get update
RUN apt-get -y install git
RUN apt-get -y install nginx
RUN apt-get -y install vim
RUN apt-get -y install logrotate
RUN apt-get -y install build-essential
RUN apt-get -y install openssl
RUN apt-get -y install python3-dev
RUN apt-get -y install python3-pip
RUN apt-get -y install nodejs
RUN apt-get -y install npm

# copy project file
COPY ./flask_app /var/www/flask_in_docker/flask_app

# install pip package
RUN pip install --upgrade pip
RUN pip install -r ./requirements.txt

# copy setting file
COPY ./nginx/default /etc/nginx/sites-enabled/default

# touch uwsgi log file
RUN mkdir /var/log/uwsgi
RUN touch /var/log/uwsgi/uwsgi.log
RUN cp ./.env.example .env

# install npm package
WORKDIR /var/www/flask_in_docker/flask_app/static
RUN npm install

WORKDIR /var/www/flask_in_docker/flask_app

# reset env
ENV DEBIAN_FRONTEND newt