import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import {GraphQLNonNull, GraphQLString} from 'graphql'
import {User} from '../../../models'
import {UserType} from '../../types'

export default {
  type: new GraphQLNonNull(UserType),
  args: {
    name: {type: new GraphQLNonNull(GraphQLString)},
    phone: {type: new GraphQLNonNull(GraphQLString)},
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)}
  },
  resolve: async (root, args) => {
    args.password = await bcrypt.hash(args.password, 8)
    const user = await User.create(args)
    const token = jwt.sign({
      id: user._id,
      email: user.email
    }, process.env.JWT_KEY)
    return Object.assign(user, {token})
  }
}