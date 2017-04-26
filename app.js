var http           = require('http'           );
var express        = require('express'        );
var bodyParser     = require('body-parser'    );
var subprocess     = require('child_process'  );
var errorHandler   = require('errorhandler'   );
var methodOverride = require('method-override');


const ccx = "/app/calculix_2.11/bin/ccx";


var app = express();

app.use(bodyParser.json({
	limit : "100kb"
}));

app.post("/", function (req, res) {
    console.log("----------");

    console.log(req.body);

    console.log("----------")
    let calculix = subprocess.spawn(ccx, ['-i', req.body['data']]);
    calculix.stdout.on('data', function (data) {
        res.send("It's worked!"); 
        res.status(200);
    });

    calculix.stderr.on('data', function (data) {
        res.send("Error!"); 
        res.status(500);
    });

    calculix.on('close', function (code) {
        if (code === 0) {
            res.send("solveFinished");
            res.status(200);
        } else if (code == 31) {
            res.send("meshFailed");
            res.status(500);
        } 
    });
})


app.listen(3000, function () {
    console.log("It's running on port 3000.")
});

