# Restaurant Reviews App
---
# Table of Contents

* [Project Overview](#project-overview)
* [Specification](#specification)
* [Project Rubric](#project-rubric)
* [Instructions](#instructions)
* [Acknowledgements](#acknowledgements)

## Project Overview

This project is a web application where you can read reviews of some of the finest restaurants in New York’s neighborhoods serving some of the most delicious cousins.
In this project, I was responsible for converting a static webpage to a mobile-ready web application. Starting with a static design that lacked accessibility, I converted the design to be responsive on different sized displays and accessible for screen reader use. I also added a service worker to capture data initially presented that allows for a seamless offline experience for the users of this application.

## Specification

The starter code provided for this restaurant reviews website came with a lot of issues, barely usable on a desktop browser, much less a mobile device. It also didn’t include any standard accessibility features nor did it work offline at all. My job was to update the code to resolve these issues while still maintaining the included functionality, providing a responsive, accessible website application that hungry people in New York might appreciate.

## Project Rubric

This project will be evaluated by a Udacity code reviewer according to the [Restaurant Reviews project rubric](https://review.udacity.com/#!/rubrics/1090/view). The Project Rubric provides detailed project requirements. The rubric is the resource of reference to ensure the project meets specifications.

## Instructions

To run the project, download or clone the repository in your computer from the following location:

      https://github.com/bulldogmgc/mws-restaurant-stage-1 

And follow the instructions below:

* Within the repository folder, start up a simple HTTP server to serve up the site files on your local computer/device. Recommendation is to use Python to do this. If you don’t have Python installed on your local computer/device, you can download Python from: 

      https://www.python.org/downloads/.
 
* To confirm if you have Python installed and what version is installed, using Git Bash, Cygwin, or Windows terminal, at the prompt type `python -V`.

* Continue with launching the simple HTTP server on your following one of the two steps below depending on your version of Python installation: 

      For Python 2.x, at the prompt launch the server with the following command:

            `python -m SimpleHTTPServer 8000`

      For Python 3.x, at the prompts launch the server with the following command:

            `python3 -m http.server 8000` or `python -m http.server 8000`
      
* With your server running, visit the site: `http://localhost:8000` using your internet browser, GoogleChrome preferred (supporting ES6). This url will search for the index.html file with the repository folder to launch the Restaurant Reviews App website. Please enjoy the experience of navigation within this website to discover some fine dining in New York’s various neighborhoods!


## Acknowledgements

* Starter code by [**Udacity**](https://github.com/udacity/mws-restaurant-stage-1).
* [**Leafletjs**](https://leafletjs.com/), an open-source JavaScript library for mobile-friendly interactive maps, & [**Mapbox**](https://www.mapbox.com/), an open source mapping platform for custom designed maps, where the token API key was obtained (to use Mapbox instead of Google Maps).
* [Progressive Web Apps (PWA) Training](https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker) – specific to caching files with service worker.
* [w3schools.com]( https://www.w3schools.com/) for various CSS tips, including flexbox.

