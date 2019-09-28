const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const app = express();
const graphqlSchema = require("./schema");
const path = require("path");

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true
  })
);

app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

module.exports = app;
