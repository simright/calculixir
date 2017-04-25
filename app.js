import http from 'http';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import methodOverride = require("method-override");


let app = express();

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

app.port("/", function (req, res) {
    res.send("It's worked!");
})


app.listen(3000, function () {
    console.log("It's running on port 3000.")
}

