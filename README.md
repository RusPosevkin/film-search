# Film-search
Responsive SPA powered by Ember.js framework. The movie search engine that using TMDB API to get movie data.

## Demo
#### Main page
![Main page](https://raw.githubusercontent.com/RusPosevkin/film-search/master/img/main.png "Main page") 
#### Concrete movie page
![Concrete movie page](https://raw.githubusercontent.com/RusPosevkin/film-search/master/img/movie.png "Concrete movie page") 

## Prerequisites

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## How to start
1. Clone this repository
  ```bash
  $> git clone https://github.com/RusPosevkin/film-search.git
  ```

2. Install dependencies
  ```bash
  $> cd ./film-search
  $> npm install
  $> bower install
  ```

3. Start server
  ```bash
  $> ember serve
  ```

4. Open a browser your app at [http://localhost:4200](http://localhost:4200).

## Features
* Showing plates with movies that contains image, title and year
* Search movies by name
* Pagination
* Full movie information in separate page
* 404 Page
* Adaptive layout
* Duplicate pagination in the bottom for devices with small screen (320 - 479 px)
* History API support
* TMDB data loading error handling. If error occurred user locate to main page.
