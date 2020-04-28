// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const routes = require("./app/routing");

// // Set our port to 8080
var PORT = process.env.PORT || 8080;

// // Create our server
app.use(bodyParser.urlencoded({
  extended: true,
}))

app.use(bodyParser.json())

require("./app/routing/apiRoutes")(app) //Adding route into the express activeness

require("./app/routing/htmlRoutes.js")(app) //Adding route into the express activeness

app.listen(PORT, function(){
  console.log(`App listening on port ${PORT}`)
})