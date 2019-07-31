var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Thirdparty = require('./thirdparty');

var customerSchema = new Schema({
  _id: {type: Schema.Types.ObjectId},
  auditTrail: {type: Object},
  thirdParty: [{type: Schema.Types.ObjectId, ref: 'Thirdparty'}],
  docRefs: {type: Object},
  salesRep: {type: Array},
  commentsArr: {type: Array}
});

module.exports = mongoose.model('Customer', customerSchema);
