var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objId = Schema.Types.ObjectId;

var UserSchema = new Schema({
  username: String,
  messages: [{ type: objId, ref: "Message" }]
});

module.exports = mongoose.model('User', UserSchema)
