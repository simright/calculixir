var http           = require('http'           );
var express        = require('express'        );
var bodyParser     = require('body-parser'    );
var subprocess     = require('child_process'  );
var errorHandler   = require('errorhandler'   );
var methodOverride = require('method-override');


// const ccx = "/app/calculix_2.11/calculix_2.11/bin/ccx";
const ccx = "/home/simright/calculix_2.11/bin/ccx";


var app = express();

app.use(bodyParser.json({
	limit : "100kb"
}));

app.post("/", function (req, res) {

    console.log("----------");
    console.log(req.body);
    console.log("----------")

    subprocess.exec(`${ccx} ${req.body['data']}`, function(error, stdout, stderr){
        if (error) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
        }
        console.log('Child Process STDOUT: ' + stdout);
     });

    // let calculix = subprocess.spawn(ccx, ['-i', req.body['data']]);
    // calculix.stdout.on('data', function (data) {
    //     // return res.status(201).send({"meshing...": "Wait a moment please."})
    // });

    // calculix.stderr.on('data', function (data) {
    //     // res.status(500).send({"Failed": "Error!"}); 
    // });

    // calculix.on('close', function (code) {
    //     if (code === 0) {
    //         console.log("------------------");
    //         res.status(200).send({"OK":"OK!"});
    //     } else if (code == 31) {
    //         console.log(">>>>>>>>>>>>>>>>>>");
    //         res.sendStatus(500);
    //     } 
    // });
})


app.listen(3000, function () {
    console.log("It's running on port 3000.")
});

