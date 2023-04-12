#!/usr/bin/python3
# 5-save_to_json_file.py
"""Defines a JSON file-writing function."""
import json


def save_to_json_file(my_obj, filename):
    with open(filename, mode='w', encoding='utf-8') as file:
        json.dump(my_obj, file)
