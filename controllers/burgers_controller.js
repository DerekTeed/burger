var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
//express is a library that helps you create a server


/*
router.get("/", function(req,res) {
    burger.selectAll(function(someData) {
        console.log(someData);
        res.render("index", someData)
    })
})  
  
  // Create a New Burger
  router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
      res.redirect('/');
    });
  });
*/

// Working. Create the routes and associated logic
router.get('/', function(req, res) {
    burger.selectAll(function(data) {

      var hbsObject = {
        burgers: data
      };
      // console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });
  //working
  router.post('/api/burgers', function(req, res) {
    console.log("--------Derek you made to POST /api/burger dude---------");
    console.log("Here's yer Request ma man: " , req.body);
    burger.insertOne("burger_name", req.body.burger_name, function() {
        
    res.redirect('/');
    });
  });
  
  router.put('/api/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    burger.updateOne({
      devoured: true
    }, condition, function(data) {
      res.redirect('/');
    });
  });

module.exports = router;