#!/usr/bin/python3
str = "Python is an interpreted, interactive, object-oriented programming\
 language that combines remarkable power with very clear syntax"
index = str.find("object-oriented programming with Python")
substring = str[index:index+len("object-oriented programming with Python")]
print(substring + "\n")
