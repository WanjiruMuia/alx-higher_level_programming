#!/usr/bin/node

const rectangle1 = new Rectangle(5, 4);
rectangle1.print();
// Output:
// XXXXX
// XXXXX
// XXXXX
// XXXXX

const rectangle2 = new Rectangle(0, 5);
rectangle2.print();
// Output:
// Empty object

const rectangle3 = new Rectangle(3.5, 2);
rectangle3.print();
// Output:
// Empty object
