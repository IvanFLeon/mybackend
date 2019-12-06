var User = require('../models/user');
var jwt = require('jsonwebtoken');
var Blog = require('../models/blog');

typeDef = `
    type Mutation {
        signup (name: String!, email: String!, password: String!): String
        createBlog (name: String!, date: Int!, author: String!, title: String!): Blog
    }
`

resolver = {
    Mutation: {
        signup: async (_, args, context) => {
          var {name, email, password} = args;
      
          const user = await User.create({
            name,
            email,
            password
          });
      
          //TODO: Catch error dealing with not unique "email" field
          return jwt.sign(user._id.toString(), process.env.PRIVATE_KEY);
        },
        createBlog: async(_, args, context) => {
          var {name, date, author, title} = args;

          const blog = await Blog.create({
            name,
            date,
            author,
            title
          });

          return blog;
        }
    }
}

module.exports = { typeDef, resolver };