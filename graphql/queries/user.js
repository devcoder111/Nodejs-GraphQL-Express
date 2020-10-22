
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var UserModel = require('../../models/user');
var userType = require('../types/user').userType;

// Query
var queryType = {
  type: new GraphQLList(userType),
  resolve: function () {
    const users = UserModel.find().exec()
    if (!users) {
      throw new Error('Error')
    }
    return users
  }
};

module.exports = {
  queryType
}
