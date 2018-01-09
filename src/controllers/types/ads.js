import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
  GraphQLString,
} from 'graphql'
import {UserType} from './'
import {User} from '../../models'

export default new GraphQLObjectType({
  name: 'Ads',
  fields: () => ({
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
    )},
    user: {
      type: new GraphQLNonNull(UserType),
      resolve: async root => {
        const user = await User.find({_id: root.uid})
        return user[0]
      }
    }
  })
})