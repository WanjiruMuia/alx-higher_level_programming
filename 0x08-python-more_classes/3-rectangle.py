#!/usr/bin/python3

class Rectangle:
    rect = Rectangle(5, 10)
print(rect.area())  # Output: 50
print(rect.perimeter())  # Output: 30

rect.width = 7
rect.height = 12

print(rect.area())  # Output: 84
print(rect.perimeter())  # Output: 38

rect.width = 0
rect.height = 5

print(rect.area())  # Output: 0
print(rect.perimeter())  # Output: 10
