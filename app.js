"use strict";

/* author: Wells Jia */

var express    = require('express'      );
var bodyParser = require('body-parser'  );
var subprocess = require('child_process');


const ccx = "/app/calculix_2.11/calculix_2.11/bin/ccx";

var app = express();

app.use(bodyParser.json({
	limit : "100kb"
}));

app.post("/", function (req, res) {
    
    console.log('################################');
    console.log(`The calculix ccx path is ${ccx}.`);
    console.log(`The data is ${req.body['data']}` );
    console.log('######## Data received. ########');
    console.log('################################');

    var calculix = subprocess.exec(`cd ${req.body['data'].substring(0, req.body['data'].lastIndexOf('/'))} && ${ccx} ${req.body['data'].split('/').pop()} && cd -`, {});
        
        calculix.stdout.on('data', function (data) {
            console.log('stdout: ' + data);
        });

        calculix.stderr.on('data', function (data)  {
            return res.status(500).send({"errMsg": data}); 
        });

        calculix.on('exit', function (code) {
            if (code === 0) {
                res.status(200).send({});
            } else {
                res.status(500).send({"errCode": code});
            }
        });
});


app.listen(3000, function () {
    console.log("Calculixir is running on port 3000.");
});
