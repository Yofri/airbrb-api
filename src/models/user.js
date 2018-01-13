const mongoose = require('mongoose')
const {isEmail, isMobilePhone} = require('validator')

module.exports = mongoose.model('users', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: value => isMobilePhone(value, 'any'),
      message: '{VALUE} is not a valid phone number'
    }
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
    validate: [isEmail, 'Invalid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Min. 8 characters']
  }
})