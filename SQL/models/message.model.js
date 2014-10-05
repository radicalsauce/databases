var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var objId = Schema.Types.ObjectId;

var MessageSchema = new Schema({

  user: {
    types: objId,
    ref: "User"
  },
  body: String,
  room: String

});

module.exports = Message = mongoose.model('Message', MessageSchema);


// Message.find()
// Message.findById()
// Message.find(function(err, data){
//  console.log(data[0]._id) // === id
// })

Message.findById(1).populate( "user").exec(function(err, data){
  var msg = {
    user: {
      username: 'bobby',
      _id: 1
    },
    body: "wriq3j4i293",
    room: 'lobby'
  };
});

var msg = {
  user: "39482399238",
  body: "wriq3j4i293",
  room: 'lobby'
}
