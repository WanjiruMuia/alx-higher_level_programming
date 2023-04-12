#!/usr/bin/python3
import sys
from os import path
from save_to_json_file import save_to_json_file
from load_from_json_file import load_from_json_file

filename = "add_item.json"

if path.exists(filename):
    my_list = load_from_json_file(filename)
else:
    my_list = []

for arg in sys.argv[1:]:
    my_list.append(arg)

save_to_json_file(my_list, filename)
