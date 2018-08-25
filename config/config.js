require('dotenv').config()
const env = process.env.NODE_ENV || 'development'

if(env === 'development' || env === 'test'){
  const config = require('./config.json')
  var envConfig = config[env]

  Object.keys(envConfig).forEach(key => {
    process.env[key] = envConfig[key]
  })
} else if(env === 'production'){
  process.env.MONGODB_URI = process.env.PRODUCTION_DB_URI
}
