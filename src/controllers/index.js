import {GraphQLSchema, GraphQLObjectType} from 'graphql'
import {
  allUsers, findUser,
  allAds, findAds
} from './queries'
import {
  createUser, updateUser, removeUser, login,
  createAds, updateAds, removeAds
} from './mutations'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      allUsers, findUser,
      allAds, findAds
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createUser, updateUser, removeUser, login,
      createAds, updateAds, removeAds
    }
  })
})