import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import {memberType, memberInputType} from '../../types';
import MemberModel from '../../../models/member';

export default {
  type: memberType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(memberInputType)
    }
  },
  resolve(root, params) {
    const memberModel = new MemberModel(params.data);
    const newMember = memberModel.save();
    if(!newMember){
      throw new Error('Error saving members');
    }
    return newMember;
  }
};
