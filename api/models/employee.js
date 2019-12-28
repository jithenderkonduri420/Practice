var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  name: String,
  department: String,
  address: String,
  gender: String,
  phone: Number,
  worktype: String
});


// Export the model
module.exports = mongoose.model('Employee', EmployeeSchema);
