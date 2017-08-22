var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var app = express();
var port = process.env.PORT || 8080;

// var connection = require("./config/connection.js");
var db = require("./models");
// Serve static content for the app from the "public" directory in the application directory.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static("public"));


// Import routes and give the server access to them.
// var routes = require("./controllers/burgers_controller.js");
// app.use("/", routes);
// app.use("/update", routes);
// app.use("/create", routes);
require("./controllers/burgers_controller.js")(app);

	
	db.sequelize.sync({ force:false }).then(function(){
	app.listen(port, function(){
		console.log("listen to", port);
	});
});
	