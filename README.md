# Plural AI Decoder

This project was created as part of a Plural AI Technical Test. It has taken roughly 5 hours and 20 minutes in total, with time allocation as follows:

- One hour on the backend
- 30 minutes on creating a Figma mockup
- Three hours on the frontend
- 30 minutes on creating documentation
- 20 minutes of refactoring

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

    $ git clone https://github.com/IsaacAderogba/product-engineer-test.git
    $ cd product-engineer-test
    $ npm install
    $ cd client
    $ npm install

### Starting Development Server

Execute command from root folder. Starts both the server and the client in development mode.

    $ npm run dev

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. Server is at [http://localhost:5000](http://localhost:5000)

### Running the tests

Execute command from root folder. First script runs testing for both the server and the client

    $ npm run test
    $ npm run test-server
    $ npm run test-client

### Deployment / Build For Production

    $ npm run build

Builds the app for production to the `public` folder in the root directory.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Available Scripts

From root folder

    Starts index.js using node command - for heroku
    $ npm run start 

    Starts index.js using nodemon as a file watcher
    $ npm run server 

    Starts react client app
    $ npm run client

    Tests server in interactive mode
    $ npm run test-server

    Tests clients in interactive mode
    $ npm run test-client

    Tests server and client using concurrently
    $ npm run test 

    Starts server and client using concurrently
    $ npm run dev 
