CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  message_id INT AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(1000),
  createdAt DATETIME,
  userId INT,
  roomId INT

  /* Describe your table here.*/
);

CREATE TABLE usernames (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20)
);

CREATE TABLE roomnames (
  room_id INT AUTO_INCREMENT PRIMARY KEY,
  roomname VARCHAR(40)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

