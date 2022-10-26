/** 
 * 

Aliases

Type aliases create a new name for a type.
Aliases help you apply the DRY (Dont Repeat Yourself) principles. 
All aliases are declared using Pascal case. i.e. Car not car.
The keyword type is use to declare an alias type.


See below for an example

**/

// Declare the custom type
type Car = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

// Apply the type to the object

let car: Car = {
    id: 1, 
    name: "C",
    retire: (date: Date) => {
        console.log(date);
    }
}