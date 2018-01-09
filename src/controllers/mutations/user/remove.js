import {GraphQLNonNull, GraphQLID} from 'graphql'
import {User} from '../../../models'
import {UserType} from '../../types'

export default {
  type: new GraphQLNonNull(UserType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: async (root, {id}) => {
    return await User.findByIdAndRemove(id)
  }
}