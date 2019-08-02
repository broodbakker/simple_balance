const { GraphQLServer } = require("graphql-yoga");

//custom import
const Mutation = require("./resolvers/mutation");
const Query = require("./resolvers/query");
const db = require("./db");

//server

function createServer() {
  return new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    // to acces the database
    context: req => ({ ...req, db })
  });
}

module.exports = createServer;
