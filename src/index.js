const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `type Query { info: String! }`;

const resolvers = {
  Query: { info: () => "This is the API of An Orange Site Clone" }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() =>
  console.log("Server is running and listening on localhost://4000")
);
