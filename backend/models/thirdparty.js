var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Contact = require('./contact');

var thirdPartySchema = new Schema({
  _id: {type: Schema.Types.ObjectId},
  type: {type: String},
  name: {type: String},
  vat: {type: String},
  corpoPhone: {type: String},
  corpoMail: {type: String},
  corpoWeb: {type: String},
  activityNumber: {type: String},
  addresses: {type: Array},
  contacts: [{type: Schema.Types.ObjectId, ref: 'Contact'}],
});

module.exports = mongoose.model('Thirdparty', thirdPartySchema);
