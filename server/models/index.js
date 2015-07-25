var db = require('../db');



module.exports = {
  messages: {
    get: function (callback) {
      console.log("models: ");
      console.log("before query");
      db.connection.query("SELECT * FROM messages, usernames, roomnames WHERE messages.userId = usernames.user_id and messages.roomId = roomnames.room_id",
      function(err, rows, fields) {
        console.log("after query");
        if(!err) {
          console.log('The solution is: ', rows);
          callback(rows);
        } else {
          console.log("error during query");
        }
      });
    }, // a function which produces all the messages
    // post: function () {
    //   db.connection.query("insert into messages 
    //     (message, createdAt, userId, roomId) 
    //     values ('Hello world', '2015-07-24 05:05:05', 
    //     (SELECT user_id FROM usernames WHERE username = 'ingi'), 
    //     (SELECT room_id FROM roomnames WHERE roomname = 'hr8'))");
    // } // a function which can be used to insert a message into the database
    },
  

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  },

  rooms: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }

};