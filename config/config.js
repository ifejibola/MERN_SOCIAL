// const config = {
//   env: process.env.NODE_ENV || 'development',
//   port: process.env.PORT || 3000,
//   jwtSecret: process.env.JWT_SECRET || "Arsenal23",
//   mongoUri: process.env.MONGODB_URI ||
//     process.env.MONGO_HOST ||
//     'mongodb://admin:admin123@ds149844.mlab.com:49844' + (process.env.IP || 'localhost') + ':' +
//     (process.env.MONGO_PORT || '27017') +
//     '/mernauth'
// }

// export default config
module.exports = {
  env: process.env.NODE_ENV || 'development',
  cookieSecret: 'Arsenal23',
  jwtSecret: '123Secret',
  PORT: 3000,
  mongo: {
    development: {
      connectionString: 'mongodb://admin:admin123@ds155616.mlab.com:55616/mernauth',
      URI: 'mongodb://admin:admin123@ds149844.mlab.com:49844/mernauth'
    },
    production: {
      // connectionString: 'mongodb://<ife9600>:<Arsenal23>@ds155616.mlab.com:55616/persist',
    },
  }
};