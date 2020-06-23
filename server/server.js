import config from '../config/config.js'
import app from './express'
import mongoose from 'mongoose'

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongo)
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongo}`)
})

app.listen(config.PORT, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.PORT)
})
