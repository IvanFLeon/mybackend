typeDef = `
    type Blog {
        id: ID!
        name: String!
        date: Int!
        author: String!
        title: String!
    }
`
resolver = {
    Blog: {
        name: async (blog, args, context) => {
            return blog.name;
        },
        date: async (blog, args, context) => {
            return blog.date;
        },
        author: async (blog, args, context) => {
            return blog.author;
        },
        title: async (blog, args, context) => {
            return blog.title;
        },
    }
}

module.exports =  { typeDef, resolver };