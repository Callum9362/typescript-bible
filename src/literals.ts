/** 
 * 

Literal Types

There are three sets of literal types available in TypeScript today: strings, numbers, and booleans; 
By using literal types you can allow an exact value which a string, number, or boolean must have.

See below for an example

**/

// Quantity can now only ever be 50
type Quantity = 50 | 100; 
let quantity: Quantity = 100;

type Selected = true;
let selectOption: Selected = true;

type Month = "October" | "November" | "December";
let month: Month = "October";

type Metrix = 'cm' | 'inch';