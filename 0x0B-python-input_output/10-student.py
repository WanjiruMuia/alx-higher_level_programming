#!/usr/bin/python3
# 11-student.py
"""Defines a class Student."""


class Student:
    """Represent a student."""
    def __init__(self, first_name, last_name, age):
        """Initialize a new Student.
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def to_json(self, attrs=None):
        if attrs is None:
            return self.__dict__
        else:
            filtered_dict = {}
            for key in attrs:
                if hasattr(self, key):
                    filtered_dict[key] = getattr(self, key)
                    """Get a dictionary representation of the Student."""
            return filtered_dict
