#!/usr/bin/python3
"""Module to define a square class"""


Rectangle = __import__('9-rectangle').Rectangle


class Square(Rectangle):
    """Defines a Square class that inherits from Rectangle"""

    def __init__(self, size):
        """Initializes a Square instance"""

        self.integer_validator("size", size)
        self.__size = size
        super().__init__(size, size)

    def area(self):
        """Calculates the area of the square"""

        return self.__size ** 2

    def __str__(self):
        """Returns the string representation of a square"""

        return "[Square] {}/{}".format(self.__size, self.__size)
