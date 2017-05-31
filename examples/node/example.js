"use strict";

/* author: Wells Jia */

var request = require('request')


const HttpdCalculixUrl = "http://127.0.0.1:3000";
const payload = "/workroot/simple";


request.post({
     url: HttpdCalculixUrl,
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
