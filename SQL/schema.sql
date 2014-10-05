CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  body TEXT,
  UID int(11),
  roomname VARCHAR(50),
  msgID int(11) NOT NULL auto_increment,
  PRIMARY KEY (msgID)
);

CREATE TABLE users (
  username VARCHAR(50),
  userID int(11) NOT NULL auto_increment,
  PRIMARY KEY (userID)
);


/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/




