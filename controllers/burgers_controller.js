// var express = require("express");

// var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");


// app.get("/",function(req, res){
//   res.redirect("/burgers");
// });

module.exports = function(app) {

   app.get("/", function(req, res) {
  db.Burger.findAll({
    where: {}
    // orderby: ['id', 'DESC']
  }).then(function(data) {
    var hbsObject = {
      burger_data: data
      // total: getSum(data)
    };
    res.render("index", hbsObject);
  });
});

app.post('/create', function (req, res) {
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
      res.render("index");
    });
  });


//  app.get("/", function(req, res){
//    db.Burger.findAll({}).then(function(dbBurger){
    
//     res.render("index");

//   });
// });

//   app.get("/:id", function(req, res) {
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Author
//     db.burger.findOne({
//       where: {
//         id: req.params.id
//       }
//       // include: [db.Author]
//     }).then(function(dbBurger) {
//       res.json(dbBurger);
//     });
//   });

//     app.get("/", function(req, res) {
//     db.burger.create(req.body).then(function(dbBurger) {
//       res.json(dbBurger);
//     });
//   });

};

// router.get("/", function(req, res) {
//   burger.findAll(function(burgerData) {
//       res.render("index", {burger_data: burgerData});   
//   });
// });

// router.post("/create", function(req, res) {
//   burger.create(req.body.burger_name, function(result){
//   console.log(result);
//   res.redirect("/");
//   });
    

// });

// router.put("/update", function(req, res) {
//   burger.update(req.body.burger_id, function(result){
//     console.log(result);
//     res.redirect("/");
//   });

// });

// Export routes for server.js to use.
// module.exports = db;
