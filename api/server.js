const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const app = express();
const graphqlSchema = require("./schema");

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true
  })
);

module.exports = app;
