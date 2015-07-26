var models = require('../models');
var bluebird = require('bluebird');
var express = require('express');



module.exports = {
  messages: {
    get: function (req, res) {
      // res.json(response, {results: models.messages.get(function(rows, fields){

      // };});
      models.messages.get(function(err, rows){
        console.log("inside controller", rows);
        res.json({results: rows});
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      var params = [ req.body.text, req.body.username ];
      models.messages.post(params, function(err, results) {
        if (!err) {
          res.json(results);
        } else {
          console.log('error in post controller');
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [ req.body.username ];
      models.users.post(params, function(err, results) {
        res.json(results);
      });
    }
  }
};

