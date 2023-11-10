const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]!
  }

  input Book {
    bookAuthor()


  }

  type Book {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: [User]
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook()
    removeBook(bookId: ID!, input:): User
  }
`;

module.exports = typeDefs;
