FROM ubuntu:20.04

# Project dir
WORKDIR /var/www/flask_app

# set env
ENV DEBIAN_FRONTEND noninteractive

# install lib
RUN apt-get update
RUN apt-get -y install git
RUN apt-get -y install nginx
RUN apt-get -y install vim
RUN apt-get -y install python
RUN apt-get -y install pip

# copy project file
COPY ./flask_app /var/www/flask_app

# install pip package
RUN pip install --upgrade pip
RUN pip install -r ./requirements.txt

# copy setting file
COPY ./nginx/default /etc/nginx/sites-enabled/default

# reset env
ENV DEBIAN_FRONTEND newt