//Library Imports
var express = require("express");
var bodyParser = require("body-parser");

//Local Imports
var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todo");
var { User } = require("./models/user");

var app = express();

//Configure middleware
app.use(bodyParser.json()); //if its custom middleware then its a function
//return value from this function is a function which we need to give to express as middleware
app.post("/todos", (req, res) => {
  console.log(req.body); ///body is stored by body parser
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then(
    doc => {
      res.send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.listen(3000, () => {
  console.log("Started on port 3000");
});
