const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true
  })
);

module.exports = app;
