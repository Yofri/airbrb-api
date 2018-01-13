import {GraphQLNonNull, GraphQLID, GraphQLList, GraphQLString} from 'graphql'
import {Ads} from '../../../models'
import {AdsType} from '../../types'
import {gcs} from '../../../middlewares'

export default {
  type: new GraphQLNonNull(AdsType),
  args: {
    uid: {type: new GraphQLNonNull(GraphQLID)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    price: {type: new GraphQLNonNull(GraphQLString)},
    address: {type: new GraphQLNonNull(GraphQLString)},
    specification: {type: GraphQLString},
    latitude: {type: new GraphQLNonNull(GraphQLString)},
    longitude: {type: new GraphQLNonNull(GraphQLString)},
    photos: {type: new GraphQLList(
      new GraphQLNonNull(GraphQLString)
    )}
  },
  resolve: async (root, args) => {
    args.photos = args.photos[0].split(' ,')
    args.photos = await gcs(args.photos)
    return Ads.create(args)
  }
}