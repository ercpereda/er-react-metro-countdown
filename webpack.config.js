var config =  process.env.NODE_ENV === 'production' 
  ?  require('./config/webpack.prod') 
  : require('./config/webpack.dev');

module.exports = config;
