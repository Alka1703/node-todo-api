const mongoose = require('mongoose');
const validator = require('validator');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
        validator:  validator.isEmail, 
         message: `{VALUE} is not a valid email`
    }
  },
  password: {
    type: String,
    minlength: 5,
    require: true
  },
  tokens: [{
    access:{
      type: String,
      required: true  
     },
    token: {
      type: String,
      required: true
    }
  }]
});

//
var User = mongoose.model('User',UserSchema);

module.exports = {User}