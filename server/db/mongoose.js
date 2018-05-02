//configuring DB connect and other
var mongoose = require("mongoose");

mongoose.Promise = global.Promise; //buit-in promise library
mongoose.connect("mongodb://localhost:27017/TodoApp");

module.exports = {
  mongoose
};
