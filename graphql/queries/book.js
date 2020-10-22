
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var UserModel = require('../../models/user');
var BookModel = require('../../models/book');
var userType = require('../types/user').userType;
var bookType = require('../types/book').bookType;

// Query
var bookType = {
  type: new GraphQLList(bookType),
  resolve: function () {

    const books = BookModel.find().exec()
    if (!books) {
      throw new Error('Error')
    }
    return books
  }
};


module.exports = {
  bookType
}
