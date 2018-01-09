import {GraphQLNonNull, GraphQLID} from 'graphql'
import {Ads} from '../../../models'
import {AdsType} from '../../types'
import {getProjection} from '../../../utils'

export default {
  type: new GraphQLNonNull(AdsType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: async (root, {id}, _, fieldASTs) => {
    const projection = getProjection(fieldASTs)
    return await Ads.findById(id).select(projection)
  }
}