var express        = require('express'        );
var bodyParser     = require('body-parser'    );
var subprocess     = require('child_process'  );


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

    var calculix = subprocess.exec(`${ccx} ${req.body['data']}`, {});
        
        calculix.stdout.on('data', function (data) {
            console.log('stdout: ' + data);
        });

        calculix.stderr.on('data', function (data)  {
            return res.status(500).send({"Failed": "Error!"}); 
        });

        calculix.on('exit', function (code) {
            if (code === 0) {
                res.status(200).send({"OK!":"OK!"});
            } else if (code == 31) {
                res.status(500).send({"failed":"failed"});
            }
        });
});


app.listen(3000, function () {
    console.log("It's running on port 3000.");
});
