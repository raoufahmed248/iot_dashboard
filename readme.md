# Project Title

A IOT dashboard which takes in environmental and locational data.

## Getting Started

### Dependencies

* Django. Can use this tutorial to setup: https://www.django-rest-framework.org/tutorial/quickstart/
* NPM. https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Installing

* Insert your google maps API key into :iot_dashboard/dashboardFrontend/dashboard-frontend/src/Component/Dashboard/MapContainer.js

To start Django Server:
* pip install django-cors-headers
* python manage.py migrate
* python manage.py createsuperuser 
* python manage.py makemigrations
* python manage.py migrate --run-syncdb
* python manage.py runserver

To start react server, (In another terminal):
* cd dashboardFrontend/dashboard-frontend
* npm install
* npm run start

### Executing program

* Start both django and react servers.
* Run the dummy python script to simulate a RPi sending data.


### Snippet
![alt text](IOTSnippet.png)
