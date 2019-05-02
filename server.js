var express = require("express");
var bodyParser = require('body-parser');
//var methodOverride = require('method-override');
var app = express();
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3101;

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
//app.use(methodOverride('_method'));


// Sets up the Express app to handle data parsing
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./controllers/burgers_controller.js");
//using burgers.controller code here
app.use('/', routes);

  // Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});



