#!/usr/bin/python3

class Rectangle:
    def __init__(self, width=0, height=0):
        def __init__(self, width=0, height=0):
        """Initialize a new Rectangle.
        
        Args:
            width (int): The width of the new rectangle.
            height (int): The height of the new rectangle.
        """
        self.width = width
        self.height = height

    @property
    def width(self):
        """Get/set the width of the Rectangle."""
        return self._width

    @width.setter
    def width(self, value):
        if not isinstance(value, int):
            raise TypeError("width must be an integer")
        elif value < 0:
            raise ValueError("width must be >= 0")
        else:
            self._width = value

    @property
    def height(self):
         """Get/set the height of the Rectangle."""
        return self._height

    @height.setter
    def height(self, value):
        if not isinstance(value, int):
            raise TypeError("height must be an integer")
        elif value < 0:
            raise ValueError("height must be >= 0")
        else:
            self._height = value

    def area(self):
        """Return the area of the Rectangle."""
        return self.width * self.height

    def perimeter(self):
         """Return the perimeter of the Rectangle."""
        if self.width == 0 or self.height == 0:
            return 0
        else:
            return 2 * (self.width + self.height)

    def __str__(self):
        """Return the printable representation of the Rectangle.
        
        Represents the rectangle with the # character.
        """
        if self.width == 0 or self.height == 0:
            return ''
        else:
            return '\n'.join(['#' * self.width] * self.height)

    def __repr__(self):
        """Return the string representation of the Rectangle."""
        return f'Rectangle({self.width}, {self.height})'

    def __del__(self):
         """Print a message for every deletion of a Rectangle."""
        print("Bye rectangle...")
