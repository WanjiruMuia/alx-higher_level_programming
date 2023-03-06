#!/usr/bin/python3
str = "Python is an interpreted, interactive, object-oriented programming\
 language that combines remarkable power with very clear syntax"

# find the index of the substring "object-oriented programming with Python"
index = str.find("object-oriented programming with Python")

# extract the substring and print it
substring = str[index:index+len("object-oriented programming with Python")]
print(substring + "\n")
