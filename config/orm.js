// Import MySQL connection.
var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") VALUES (";

    var questionMarks = "?";
    for (var i = 1; i < vals.length; i++) {
      questionMarks += ", ?";
    }

    queryString += questionMarks;
    queryString += ")";

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateOne: function(table, setVals, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";

    var setStatement = [];
    for (var key in setVals) {
      var value = setVals[key];

      if (typeof value == "string" && value != "true") {
        value = "'" + value + "'";
      }

      setStatement.push(key + "=" + value);
    }

    queryString += setStatement.toString();
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
