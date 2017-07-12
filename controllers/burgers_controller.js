var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data) {
        var burger = {
            burger: data
        };
        console.log(burger);
    res.render("index", burger);
    })
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

router.post("/", function(req, res) {
    console.log("before insert: this is before burger.insert - req.body.burger_name: ", req.body.burger_name),
    burger.insert(req.body.burger_name,
    function(){
        res.redirect("/")
    });
});


module.exports = router;