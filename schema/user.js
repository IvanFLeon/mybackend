typeDef = `
    type User {
        id: ID!
        name: String!
        email: String!
    }
`
resolver = {
    User: {
        name: async (user, args, context) => {
            return user.name;
        },
        email: async (user, args, context) => {
            return user.email;
        }
    }
}

module.exports =  { typeDef, resolver };