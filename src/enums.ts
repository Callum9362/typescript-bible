/** 
 * 
Enums

Typescript has a built in type named enum. 
Enums represent a list of related constants.
Enums are declared using PascalCase including their member items.
If you want less dense javascript from the compiler do this const enum Size ...


// Turn this..
const small = 1;
const medium = 2;
const large = 3;

**/

// Into this..
enum Size  { Small = 1, Medium = 2, Large = 3};
let mySize: Size = Size.Medium;
console.log(mySize);


enum Direction { North, South, East, West};
let myDirection: Direction = Direction.West;
console.log(myDirection);