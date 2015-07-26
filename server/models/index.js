var db = require('../db');



module.exports = {
  messages: {
    get: function (callback) {
      console.log("models: ");
      console.log("before query");
      var queryStr = "SELECT messages.message_id, messages.message, messages.createdAt, usernames.username \
        from messages left outer join usernames on (messages.userId = usernames.user_id)"
      db.connection.query(queryStr, function(err, rows, fields) {
        // console.log("after query");
        if(!err) {
          console.log('The solution is: ', rows);
          callback(err, rows);
        } else {
          console.log("error during query");
        }
      });

      // var queryStr = "select messages.id, messages.text, messages.roomname, users.username \
      //                 from messages left outer join users on (messages.userid = users.id) \
      //                 order by messages.id desc";


    }, 
    // a function which produces all the messages
    post: function (params, callback) {
      var queryStr = "insert into messages(messages, username) \
                      value (?, (select id from usernames where username = ? limit 1))";
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    //   db.connection.query("insert into messages 
    //     (message, createdAt, userId, roomId) 
    //     values ('Hello world', '2015-07-24 05:05:05', 
    //     (SELECT user_id FROM usernames WHERE username = 'ingi'), 
    //     (SELECT room_id FROM roomnames WHERE roomname = 'hr8'))");
    // } // a function which can be used to insert a message into the database
    }
  },
  

  users: {
    // Ditto as above.
    get: function () {
      var queryStr = "select * from users";
      db.query(queryStr, function(err, results){
        callback(err, results);
      });
    },
    post: function () {
      var queryStr = "insert into usernames(username) values (?)";
            db.query(queryStr, params, function(err, results){
              callback(err, results);
            });
    }
  },

  rooms: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }

};