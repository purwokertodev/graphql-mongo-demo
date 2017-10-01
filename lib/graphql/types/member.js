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
import PostModel from '../../models/post';
import { postType } from './post';

export const memberType = new GraphQLInputObjectType({
  name: 'Member',
  description: 'Member API',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    full_name: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },
    profile_picture: {
      type: GraphQLString
    },
    created_at: {
      type: GraphQLDate
    },
    updated_at: {
      type: GraphQLDate
    },
    posts: {
      type: new GraphQLList(postType),
      resolve(member) {
        const { _id } = member;
        return PostModel.find({author: _id}).exec();
      }
    }
  })
});

export const memberInputType = new GraphQLInputObjectType({
  name: 'MemberInput',
  description: 'Member Input Type',
  fields: () => ({
    full_name: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },
    profile_picture: {
      type: GraphQLString
    }
  })
});
