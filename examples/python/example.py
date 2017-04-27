# -*- coding:utf-8 -*-

# author: Wells Jia

import requests
import pprint

url = "http://127.0.0.1:3000"
payload = {"data": "/app/data/demo/simple"}


r = requests.post(url, json=payload)

print "-" * 45
print "Response status code is %s " % r.status_code
print "-" * 45
print "\r" * 2 
print "-" * 45
pprint.pprint("Response body is %s " % r.json())
print "-" * 45

