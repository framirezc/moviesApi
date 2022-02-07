# NestJS RESTful Movie API

## Description

This is an example of a RESTful api with NestJS. This example only implements READ methods in order to obtain information from a mongoDB source.

## Previous requirements

It is necessary to have mongoDB server which allows us to import the database. You can obtain the JSON file with the movies database information at `https://raw.githubusercontent.com/delta-protect/development-test/ecf81af87927f5828d4356ce87c49bfcc305a201/movies.json`


```bash
# Run mongoDB server
$ mongod
```
In other terminal, (not mongo-shell) run the import script.

```bash
# Run mongoDB server
$ mongoimport --jsonArray --db titles --collection movies --file movies.json
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Using the app

When the app is run locally, it is available at `http://localhost:3000/movies`.

The app contains two endpoints.

The GET '/movies' endpoint retrieves all the data from the database. This method could receives some query params in order to get the info paginated, filtered and sorteres.

The query parameter are /movies?filter={}&sortBy={}&page={}. It accepts one word as a filter and return only movie titles that contain that word. The sortBy params allows to sort the information by title or by year. So, the two possible values are 'title' or 'year'. Finally the number of page that you need to obtain.

The GET '/movies/{:id}' endpoint retrieves the data from an specific element from thedatabases. This method receives an id and retrieves the information of that particular movie title.

METHODS (e.g)

http://localhost:3000/movies?sortBy=year&page=2&filter=moon

http://localhost:3000/movies/61fef84295f4c989beb4da1f


## Swagger Documentation

When running the project locally, visit `http://localhost:3000/api` to access the Swagger UI.
