> How to use ?

``` bash
httpd_calculix_url = "http://127.0.0.1:3000"    # calculix server address
payload = "/app/data/demo/simple"               # /app/data/demo/simple.inp in container
```

**Response status code.**

| status code |    meaning   |
| ----------- | ------------ |
|     200     |  succeed     |
|     500     |  error       | 

A POST request should be sent to [httpd_calculix_url](http://127.0.0.1:3000) with body, an application/json body.
Calculixir server will receive \*.inp path by request body, and it will return some response for you.
