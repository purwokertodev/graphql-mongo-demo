import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import {memberType, memberInputType} from '../../types/member';
import MemberModel from '../../../models/member';

export default {
  type: memberType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(memberInputType)
    }
  },
  resolve(root, params) {
    return MemberModel.findByIdAndUpdate(params.id, { $set: {...params.data}})
      .then(data => MemberModel.findById(data._id).exec())
      .catch(err => new Error(err));
  }
};
