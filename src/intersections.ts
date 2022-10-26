/** 
 * 

Intersections

An intersection type creates a new type by combining multiple existing types. The new type has all features of the existing types.
To combine types, you use the & operator as follows:

See below for an example

**/

type Draggable = {
    drag: () => void,
}

type Resizable = {
    resize: () => void,
}


type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {},
}