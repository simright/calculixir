var request = require('request')

request.post({
     url: "http://127.0.0.1:3000",
     headers: {
        "Content-Type": "application/json"
     },
     body: {
       "data": "/app/data/demo/simple"
     },
     json:true
}, function(error, response, body){
   console.log(error);
   console.log(JSON.stringify(response['statusCode']));
   console.log(body);
});

// a POST request will be sent to http://127.0.0.1:3000
// with body an application/json body:
 
