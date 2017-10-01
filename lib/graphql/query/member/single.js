import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import { memberType } from '../../types';
import MemberModel from '../../../models/member';

export default {
  type: userType,
  args: {
    id: {
      name: 'ID',
      tpe: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    return MemberModel.findById(params.id).exec();
  }
};
