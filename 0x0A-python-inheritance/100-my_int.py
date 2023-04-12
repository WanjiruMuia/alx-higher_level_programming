#!/usr/bin/python3
"""Module to define a MyInt class"""


class MyInt(int):
    """Defines a MyInt class that inherits from int"""

    def __eq__(self, other):
        """Inverts the behavior of the == operator"""

        return int(self) != other

    def __ne__(self, other):
        """Inverts the behavior of the != operator"""

        return int(self) == other
