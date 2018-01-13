const mongoose = require('mongoose')

module.exports = mongoose.model('ads', {
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: String,
    required: true,
    trim: true
  },
  specification: {
    type: String
  },
  latitude: {
    type: String,
    required: true,
    trim: true
  },
  longitude: {
    type: String,
    required: true,
    trim: true
  },
  photos: [{
    type: String
  }],
  address: {
    type: String,
    required: true,
    trim: true
  }
})