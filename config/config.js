const config = {
  env: process.env.NODE_ENV || 'development',
  cookieSecret: '',
  jwtSecret: '123Secret',
  PORT: process.env.PORT || 3000,
  mongo: 'mongodb+srv://admin:admin123@mernauth.gezyk.mongodb.net/mernauth?retryWrites=true&w=majority' || process.env.MONGODB_URI || process.env.MONGO_HOST
};
module.exports = config
// export default config