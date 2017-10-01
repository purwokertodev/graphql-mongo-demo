import{
  GraphQLList
} from 'graphql';

import { memberType } from '../../types';
import MemberModel from '../../../models/member';

export default {
  type: new GraphQLList(memberType),
  resolve() {
    const members = MemberModel.find().exec();
    if(!members){
      throw new Error('Error getting members');
    }
    return members;
  }
};
