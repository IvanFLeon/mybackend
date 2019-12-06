var User = require('../models/user');
var jwt = require('jsonwebtoken');
var Blog = require('../models/blog');

typeDef = `
    type Query {
        me: User
        login (email: String!, password: String!): String
        blog (name: String!): Blog
    }
`

resolver = {
    Query: {
        me: async (_, args, context) => {
            var {user_id} = context;

            // Verify if user is logged in
            if(!user_id) throw new Error("You're not authenticated");
            return await User.findById(user_id);
        },
        login: async (_, args, context) => {
            var {email, password} = args;
        
            const user = await User.findOne({email});
        
            if (!user) throw new Error("No user registered with this email");
        
            var isMatch = await user.comparePassword(password);
        
            if (!isMatch) throw new Error("Invalid password");
        
            return jwt.sign(user._id.toString(), process.env.PRIVATE_KEY);
        },
        blog: async (_, args, context) => {
            var {name} = args;

            const blog = await Blog.findOne({name});

            if (!blog) throw new Error("No blog found with that name");

            return blog;
        }
    }
}

module.exports = { typeDef, resolver };