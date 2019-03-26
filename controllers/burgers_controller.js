var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgersObject = {
      burgers: data
    };
    // console.log(burgersObject);
    res.render("index", burgersObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log(req.body);
  burger.create(["burger_name"], [req.body.burger_name], function(result) {
    res.json({ id: result.insertId });
    // Send back the ID of the new quote
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  console.log(req.body.devoured);
  burger.update(
    {
      devoured: "true"
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
