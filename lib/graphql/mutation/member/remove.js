import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import {memberType} from '../../types';
import MemberModel from '../../../models/member';

export default {
  type: memberType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const removedMember = MemberModel.findByIdAndRemove(params.id).exec();
    if(!removedMember){
      throw new Error('Error saving members');
    }
    return removedMember;
  }
};
