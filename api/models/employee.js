var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    empname: String,
    department: String,
    address: String,
    gander: String,
    phonenumber: Number,
    worktype: String
});



// Export the model
module.exports = mongoose.model('Employee', EmployeeSchema);