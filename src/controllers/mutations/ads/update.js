import {GraphQLNonNull, GraphQLID, GraphQLString, GraphQLList} from 'graphql'
import {Ads} from '../../../models'
import {AdsType} from '../../types'

export default {
  type: new GraphQLNonNull(AdsType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    uid: {type: new GraphQLNonNull(GraphQLID)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    price: {type: new GraphQLNonNull(GraphQLString)},
    address: {type: new GraphQLNonNull(GraphQLString)},
    latitude: {type: new GraphQLNonNull(GraphQLString)},
    longitude: {type: new GraphQLNonNull(GraphQLString)},
    specification: {type: GraphQLString},
    photos: {type: new GraphQLList(
      new GraphQLNonNull(GraphQLString)
    )}
  },
  resolve: async (root, args) => {
    return Ads.findByIdAndUpdate(args.id, args)
  }
}