const Query = require('./query.js');
const Mutation = require('./mutation.js');
const User = require('./user.js');
const Blog = require('./blog.js');

const { makeExecutableSchema } = require('graphql-tools');

module.exports = makeExecutableSchema({
    typeDefs: [Query.typeDef, Mutation.typeDef, User.typeDef, Blog.typeDef],
    resolvers: [Query.resolver, Mutation.resolver, User.resolver, Blog.resolver]
});