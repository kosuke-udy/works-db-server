import { query } from './query';
import { Resolvers } from 'types/generated/graphql';
import { works } from './mocks/works';

export const resolvers: Resolvers = {
    Query: {
        works: () => works,
    },
};