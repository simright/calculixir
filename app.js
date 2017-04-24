"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var errorHandler = require("errorhandler");
var methodOverride = require("method-override");
var app = express();
// Application initialization 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
// Environment
var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    app.use(errorHandler());
}
// Routes
app.post('/', function (req, res) {
    console.log("----------");
    console.log(req);
    console.log("==========");
    console.log(res);
});
app.listen(3000, function () {
    console.log("It's running on port %d in %s mode", 3000, app.settings.env);
});
exports.App = app;
//# sourceMappingURL=app.js.map