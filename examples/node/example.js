"use strict";

/* author: Wells Jia */

var request = require('request')


const httpd_calculix_url = "http://127.0.0.1:3000";
const payload = "/app/data/demo/simple";


request.post({
     url: httpd_calculix_url,
     headers: {
        "Content-Type": "application/json"
     },
     body: {
       "data": payload 
     },
     json:true
}, function(error, response, body){
   console.log("------------------------------------");
   console.log(error);
   console.log("------------------------------------");
   console.log(JSON.stringify(response['statusCode']));
   console.log("------------------------------------");
   console.log(body);
   console.log("------------------------------------");

});

/* 
 * a POST request will be sent to http://127.0.0.1:3000
 * with body an application/json body.
 */
