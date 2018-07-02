var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
//'mongodb://Alka1703:alka1703@ds161700.mlab.com:61700/alka'
let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: process.env.MONGODB_URI
  };
  mongoose.connect(db.mlab || db.localhost);

  module.exports = {mongoose};