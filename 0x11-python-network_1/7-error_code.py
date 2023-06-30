#!/usr/bin/python3
"""Sends a request to a given URL and displays the response body.

import requests
from sys import argv

if __name__ == "__main__":
    request = requests.get(argv[1])
    if request.status_code >= 400:
        print("Error code: {}".format(request.status_code))
    else:
        print(request.text)
