var models = require('../models');
var bluebird = require('bluebird');
var express = require('express');



module.exports = {
  messages: {
    get: function (req, res) {
      // res.json(response, {results: models.messages.get(function(rows, fields){

      // };});
      models.messages.get(function(rows){
        console.log("inside controller", rows);
        res.json({results: rows});
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post()
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

