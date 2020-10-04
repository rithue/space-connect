require("./db/mongo")

// load up the express framework and body-parser helper
const express = require("express");
const bodyParser = require("body-parser");

const projectsRouter = require("./routes/projects");
const usersRouter = require("./routes/users");

// create an instance of express to serve our end points
const app = express();

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
const fs = require("fs");

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/spaceconnect/users', usersRouter);
app.use('/spaceconnect/projects', projectsRouter);

// this is where we'll handle our various routes from
// const routes = require("./routes/routes.js")(app, fs);

// finally, launch our server on port 3001.
const server = app.listen(3001, () => {
  console.log("listening on port %s...", server.address().port);
});