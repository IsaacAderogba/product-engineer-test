# Plural AI Decoder

This project was created as part of a Plural AI Technical Test. It has taken roughly 5 hours in total, with time allocation as follows:

- One hour on the backend
- 30 minutes on creating a Figma mockup
- Three hours on the frontend
- 30 minutes on creating documentation

This is a single-page web application that decodes numeric substitution ciphers into their original output.

You can find the deployed project at: https://pluralai-decoder.herokuapp.com/
You can find the Figma mockup at: https://www.figma.com/file/fEJd9xAV8o6ujQdtEM2Oro/Plural-AI?node-id=0%3A1

## Tech Stach

#### Built using:

- _NodeJS (Express-GraphQL)_
- _React (TypeScript)_

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

For development, you will need Node.js and npm installed on your environment.

    $ node --version
    v10.16.0

    $ npm --version
    6.9.0

### Installing

    $ Clone/fork this project from https://github.com/IsaacAderogba/product-engineer-test.git
    $ npm install server side libraries (from root folder)
    $ cd to client and npm install client side libraries

### Starting Development Server

    $ npm run dev

Execute command from root folder. Starts both the server and the client in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Running the tests

    $ npm run test

Execute command from root folder. Runs testing for both the server and the client

### Deployment / Build For Production

    $ npm run build

Builds the app for production to the `public` folder in the root directory.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Available Scripts

From root folder

    $ npm run start // starts index.js using node command - for heroku
    $ npm run server // starts index.js using nodemon as a file watcher
    $ npm run client // starts react client app
    $ npm run test-server // tests server in interactive mode
    $ npm run test-client // tests client in interactive mode
    $ npm run test // tests server and client using concurrently
    $ npm run dev // starts server and client using concurrently

## Dependencies

cors
dotenv
express
express-graphql
graphql
jest
concurrently
