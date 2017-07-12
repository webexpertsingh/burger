var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insert: function(value1, cb) {
        console.log("value1: ", value1);
        orm.insertOne("burgers", "burger_name", "devoured", value1, false, function(req, res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
    }
};

//export the functions for the controller
module.exports = burger;