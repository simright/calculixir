> How to use ?

``` bash
httpd_calculix_url = "http://127.0.0.1:3000"    # httpd_calculix_url is calculix server address
payload = "/app/data/demo/simple"               # payload is *.inp path which in calculix container
```

**Response status code.**

| status code |    meaning   |
| ----------- | ------------ |
|     200     | mesh succeed |
|     500     | mesh failed  | 

A POST request should be sent to [httpd_calculix_url](http://127.0.0.1:3000) with body, an application/json body.
Calculixir server will receive \*.inp path by request body, and it will return some response for you.
