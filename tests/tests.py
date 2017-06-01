# -*- coding:utf-8 -*-

# author: Wells Jia

import requests
import pprint

HttpdCalculixUrl = "http://127.0.0.1:3000"
payload = "/workroot/simple"


r = requests.post(HttpdCalculixUrl, json={"data": payload})

print "-" * 45
print "Response status code is %s " % r.status_code
print "-" * 45
print "\r" * 2
print "-" * 45
pprint.pprint("Testing Succeed!")
print "-" * 45

