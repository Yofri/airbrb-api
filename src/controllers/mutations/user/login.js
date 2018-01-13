import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import {GraphQLNonNull, GraphQLString} from 'graphql'
import {User} from '../../../models'
import {UserType} from '../../types'

export default {
  type: new GraphQLNonNull(UserType),
  args: {
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)}
  },
  resolve: async (root, {email, password}) => {
    const user = await User.findOne({email})
    if (!user) return {msg: 'Email not found.'}

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) return {msg: 'Wrong password.'}

    const token = jwt.sign({
      id: user._id,
      email: user.email
    }, process.env.JWT_KEY)
    return Object.assign(user, {token})
  }
}