import {GraphQLNonNull, GraphQLList} from 'graphql'
import {Ads} from '../../../models'
import {AdsType} from '../../types'

export default {
  type: new GraphQLNonNull(
    new GraphQLList(new GraphQLNonNull(AdsType))
  ),
  resolve: () => Ads.find()
}