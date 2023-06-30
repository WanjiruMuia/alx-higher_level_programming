#!/usr/bin/python3
"""Sends a POST request to a given URL with a given email.

import requests
from sys import argv

if __name__ == "__main__":
    print(requests.post(argv[1], data={'email': argv[2]}).text)
