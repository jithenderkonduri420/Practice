var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  email: String,
  password: String
});


// Export the model
module.exports = mongoose.model('User', UserSchema);
