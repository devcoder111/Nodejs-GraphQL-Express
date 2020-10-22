var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var queryType = require('./queries');
var mutation = require('./mutations/index');

exports.userSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    	name: 'Query',
  	  fields: queryType
	  }
  ),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation
  })
})

