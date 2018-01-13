const app = require('express')()
const graphqlHTTP = require('express-graphql')
const {mongoose, connection} = require('./configs')
const schema = require('./controllers')
const cors = require('cors')
const morgan = require('morgan')
const port = process.env.PORT

app.use(cors())
app.use('/airbrb', morgan('dev'), graphqlHTTP({
  schema,
  graphiql: true
}))

connection.on('error', () => console.log('Error connecting to database'))
connection.once('open', () => console.log('Connected to database'))
app.listen(port, () => console.log(`Express listening on port ${port}`))