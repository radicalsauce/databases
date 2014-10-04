var mysql = require('mysql');
//var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
var dbConnection = mysql.createConnection({
  user: "root",
  password: "simple",
  database: "chat"
});

dbConnection.connect();
/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/




exports.findAllMessages = function(cb){
  console.log('findAllMessages');
};

exports.findUser = function(username, cb){
  dbConnection.query("SELECT userID, username FROM users WHERE username = ?", [username], function(err, rows) {
    cb(err,rows);
  });
};

exports.saveUser = function(username, cb){
  dbConnection.query("INSERT INTO users (username) VALUES(?)", [username], function(err, rows) {
    if(err){
      throw err;
    }
    console.log('now you need to hook saveUser up to saveMessage')
  });
};

exports.saveMessage = function(message, userid, roomname, cb){
  console.log("OMG ARGS ", arguments);
  var values = [arguments[0], arguments[1], arguments[2]];
  dbConnection.query("INSERT INTO messages (body, UID, roomname) VALUES(?)", [values], function(err, rows) {
    if(err){
      throw err;
    }
  });
};

