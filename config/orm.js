var connection = require('./connection');
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}
//create orm object 
var orm = {
//create queryies for each need in application:
selectAll: function(tableName, cb) {
    //create query string - build using variable 
    var queryString ="SELECT * FROM burgers";
    //connect to database using exported connection
    connection.query(queryString, tableName, function(err, result) {
        if (err) throw err
        // console.log("here is the select all statement");
        // console.log("--------------------------------");
        console.log(result);
        cb(result);
        });
    },
updateOne: function(table, objColVals, condition, cb) {
    //create query string - build using variable 
   var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

        cb(result);
        });
    },
insertOne: function(tableName, columnName1, columnName2, value1, value2, cb) {
    //create query string - build using variable
    var queryString ="INSERT INTO ?? (??, ??) VALUES (?, ?); ";
    //connect to database using exported connection
    connection.query(queryString, [tableName, columnName1, columnName2, value1, value2], function(err, result) {
        if (err) throw err
        console.log(result);
        cb(result);
        });
    }
}
module.exports = orm;