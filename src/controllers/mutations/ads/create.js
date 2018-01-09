import {GraphQLNonNull, GraphQLID, GraphQLList, GraphQLString} from 'graphql'
import {Ads} from '../../../models'
import {AdsType} from '../../types'
import {multer} from '../../../middlewares'

export default {
  type: new GraphQLNonNull(AdsType),
  args: {
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
    args.photos = args.photos[0].split(' ,')
    const b64string = args.photos[0];
    console.log(b64string)
    const buf = Buffer.from(b64string, 'base64'); // Ta-da
    console.log(buf)
    // return await Ads.create(args)
  }
}