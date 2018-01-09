import {GraphQLNonNull, GraphQLID} from 'graphql'
import {Ads} from '../../../models'
import {AdsType} from '../../types'

export default {
  type: new GraphQLNonNull(AdsType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: async (root, {id}) => {
    return await Ads.findByIdAndRemove(id)
  }
}