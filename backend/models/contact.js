var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
  _id: {type: Schema.Types.ObjectId},
  title: {type: String},
  role: {type: String},
  firstName: {type: String},
  lastName: {type: String},
  phone: {type: String},
  mobile: {type: String},
  email: {type: String}
});

module.exports = mongoose.model('Contact', contactSchema);

