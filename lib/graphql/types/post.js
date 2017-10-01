import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} from 'graphql';

import GraphQLDate from 'graphql-date';

export const postType = new GraphQLObjectType({
  name: 'Post',
  description: 'Post Object Type',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    title: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    author: {
      type: GraphQLString
    },
    created_at: {
      type: GraphQLDate
    },
    updated_at: {
      type: GraphQLDate
    }
  })
});

export const postInputType = new GraphQLInputObjectType({
  name: 'PostInput',
  description: 'Post Object Input Type',
  fields: () => ({
    title: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    author: {
      type: GraphQLString
    }
  })
});
