const mongoose = require('mongoose')
const connection = mongoose.connection
require('dotenv').config()

mongoose.connect(process.env.MLAB_URI)
mongoose.Promise = global.Promise

module.exports = {mongoose, connection}