var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  db.Burgers.findAll({include: [db.Customers]}).then(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  db.Burgers.create({
    burger_name: req.body.name,
    devoured: false
  }).then(function (result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  db.Customers.findOrCreate({
    where: {
      name: req.body.custName
    }
  }).then(function (results) {

    db.Burgers.update({
      devoured: req.body.devoured,
      CustomerId: results[0].id
    }, {
        where: {
          id: req.params.id
        }
      })
      .then(function (result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
  });
});


// Export routes for server.js to use.
module.exports = router;
