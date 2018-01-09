import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString
} from 'graphql'
import {AdsType} from './'
import {Ads} from '../../models'

export default new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    phone: {type: new GraphQLNonNull(GraphQLString)},
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)},
    token: {type: GraphQLString},
    total: {
      type: GraphQLInt,
      resolve: async root => {
        const ads = await Ads.find({uid: root._id})
        return ads.length
      }
    },
    ads: {
      type: new GraphQLList(AdsType),
      resolve: async root => {
        return Ads.find({uid: root._id})
      }
    }
  })
})