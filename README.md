# Users , Friends & Friends-of-Friends

Node Js server for social media platform. The database used is PostgreSQL.
Express is used as routing library.
Sequelize ORM is used to interact with Postgres DB.

## Setup

 - Create PostgreSQL DATABASE if not available.
 - Update the Database config in src/config/config.json, for development server user `develpoment` block, use ENV VARIABLE if running in Production
 - RUN `npm i` to install all the required package
 - RUN `sequelize db:migrate` to create database schema
 - RUN `sequelize db:seed:all` to load initial data
 - Use command `npm start` to start the server

## Docker

 - `docker build . -t user_friends`
 - `docker run -p 8000:8000 user_friends`

## Postman API Collection

https://www.getpostman.com/collections/04224a6f686db60992f8


