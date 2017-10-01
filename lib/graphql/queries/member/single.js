import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import { memberType } from '../../types/member';
import MemberModel from '../../../models/member';

export default {
  type: memberType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    return MemberModel.findById(params.id).exec();
  }
};
