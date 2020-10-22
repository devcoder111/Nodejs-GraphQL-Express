var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});
var Model = mongoose.model('Book', bookSchema);
module.exports = Model;
