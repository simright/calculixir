var http           = require('http'           );
var express        = require('express'        );
var bodyParser     = require('body-parser'    );
var errorHandler   = require('errorhandler'   );
var methodOverride = require('method-override');


var app = express();

app.use(bodyParser.json({
	limit : "100kb"
}));

app.post("/", function (req, res) {
    console.log("starting...");
    console.log(req.body);
    console.log("done.");
    res.send("It's worked!");
})


app.listen(3000, function () {
    console.log("It's running on port 3000.")
});

