import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';

import { typeDefs } from './graphql/schema';
import { resolvers } from './resolvers';
import { works } from './mocks/works';
import { artistNames } from './mocks/artistNames';

export const server = new ApolloServer({
  typeDefs: [typeDefs],
  resolvers: resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  context: () => {
    return {
      works: works,
      artistNames: artistNames,
    };
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
