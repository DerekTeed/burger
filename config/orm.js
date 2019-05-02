var connection = require("../config/connection.js");


var orm = {
    selectAll: function (tableName, doSomethingWith) {
        var query = "SELECT * FROM " + tableName + ";";
        connection.query(query, function (err, results) {
            if (err) {
                console.log("error inside selectAll orm.js")
            } else {
                doSomethingWith(results);
            }
        })
    },
    //cats has table, cols, vals, and cb. I have value, cb. 
    //Throwing error. why?
    insertOne: function (table, cols, value, cb) {

        var query = "INSERT INTO ?? (??) VALUES (?)";
        console.log(query);
        console.log(table, cols, value)
        connection.query(query, [table, cols, value], function
            (err, result) {
            if (err) {
                console.log("error within insertOne orm.js")
            };
            cb(result);
        });
    },
    //Unfixable error here.
    updateOne: function (table, col1, val1, whereCol1, whereVal1, cb) {
        var query = "UPDATE ?? SET ??=? WHERE ??=?";
        console.log(query);
        connection.query(query, [table, col1, val1, whereCol1, whereVal1], function
            (err, res) {
            if (err) {
                console.log("error within updateOne orm.js");
            } else {
                cb(res);
            }
        });
    }
}
module.exports = orm;