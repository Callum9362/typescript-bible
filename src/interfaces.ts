/** 
 * 

Interfaces

Interfaces allows types to be easily shared between different variables/objects.
Interfaces are similar to type aliases, except they only apply to object types.
Interfaces can extend each other's definition.

See below for an example

**/


// Basic use

interface Rectangle {
    height: number,
    width: number
  }
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };


// Example of Extended Interface

interface Square {
    height: number,
    width: number
  }

interface ColoredSquare extends Square {
    color: string
}

const coloredSquare : ColoredSquare = {
    height: 20,
    width: 10,
    color: "red"
};