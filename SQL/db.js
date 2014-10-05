var mysql = require('mysql');
var User = require("./models/user.model.js");
var Message = require("./models/message.model.js");

// var dbConnection = mysql.createConnection({
//   user: "root",
//   password: "",
//   database: "chat"
// });

//dbConnection.connect();
/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/




// pass whole message in TODO
exports.findUser = function(message, cb){
  User.find({ username : message.username}, function(err, data){
    if (err || data.length) {
      saveUser(message.username, function(data){
        saveMessage(message, data[0]);
      });
    }
  });

};

exports.saveUser = saveUser = function(username, cb){
  User.create( { username: username });
  //use the callbask to pass back info

};

exports.saveMessage = function(message, user){
  // adding the message to user
  var newMessage = new Message({ user: user._id, body: message.body, room: message.room });
  user.messages.push({ message: newMessage }); // or push in newMessage._id
  user.save();
  // writing message entry with user id

};


// use the below commented out code if you want the promises chain to work.

// exports.findAllMessages = function(cb){
//   dbConnection.query("SELECT messages.body, users.username, messages.roomname FROM messages JOIN users ON messages.UID = users.userID", function(err, rows) {
//     cb(err,rows);
//   });
// };

// exports.findUser = function(username, cb){
//   dbConnection.query("SELECT userID, username FROM users WHERE username = ?", [username], function(err, rows) {
//     cb(err,rows);
//   });
// };

// exports.saveUser = function(username, cb){
//   dbConnection.query("INSERT INTO users (username) VALUES(?)", [username], function(err, rows) {
//     if(err){
//       throw err;
//     }
//     dbConnection.query("SELECT userID FROM users WHERE username = ?", [username], function(err, rows) {
//       cb(rows);
//     });
//   });
// };

// exports.saveMessage = function(message, userid, roomname, cb){
//   var values = [arguments[0], arguments[1], arguments[2]];
//   dbConnection.query("INSERT INTO messages (body, UID, roomname) VALUES(?)", [values], function(err, rows) {
//     if(err){
//       throw err;
//     }
//   });
// };


