// var express = require("express");
// var exphbs = require("express-handlebars");
// var app = express.Router();

// var methodOverride = require("method-override");

// Import the model (cat.js) to use its database functions.
var db = require("../models");


module.exports = function(app) {

  app.get("/", function(req, res) {
  db.Burger.findAll({
    where: {}
  }).then(function(data) {
    var hbsObject = {
      burger_data: data
    };
    res.render("index", hbsObject);
  });
});

app.post("/create", function (req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    })
        .then(function () {
            res.redirect('/')
  });
});

app.put("/:id", function(req, res) {
    db.Burger.update({
    devoured: req.body.devoured
  },
    {
    where: {
      id: req.params.id
    }
  }).then(function(result) {
  console.log(result);
  res.redirect("/");
  });
});

 app.get("/api", function(req, res) {
    var query = {};
    if (req.query.burger_name) {
      query.burger_name = req.query.burger_name;
    }
    db.Burger.findAll({
      where: query
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

};

// module.exports = db;
