#!/usr/bin/python3
"""Module to define a function to add attributes to an object"""


def add_attribute(obj, name, value):
    """Adds a new attribute to an object if possible"""

    if hasattr(obj, "__dict__"):
        obj.__dict__[name] = value
    else:
        raise TypeError("can't add new attribute")
