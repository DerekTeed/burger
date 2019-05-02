//import orm per requirements
var orm = require("../config/orm.js");

//Also inside burger.js, create the code that will call 
//the ORM functions using burger specific input for the ORM.
var burgers = {
    selectAll: function(processResults) {
        orm.selectAll("burgers", function(res) {
            processResults(res);
        });
    },
    // The variables cols and vals are arrays
  insertOne: function(cols, value, cb) {
    orm.insertOne('burgers', cols, value, function(res) {
      cb(res);

    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(col1, val1, whereCol1, whereVal1, cb) {
    orm.updateOne('burgers', col1, val1, whereCol1, whereVal1, function(res) {
      cb(res);
    });
  }
}

module.exports = burgers;