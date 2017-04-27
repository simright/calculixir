var request = require('request')
request({

  // HTTP Archive Request Object
  har: {
    url: 'http://127.0.0.1:3000',
    method: 'POST',
    postData: {
      'content-type': 'application/json',
      body: {"data":"/app/data/demo/simple"}
    }
  }
})

// a POST request will be sent to http://127.0.0.1:3000
// with body an application/json body:
 
