/** 
 * 
 * 
Primitive Types

In Typescript we do not always need to annote our variables.
This is because the Typescript compiler can detect variables based on their value.

So instead of writing the below....

let sales: number = 123_456_789;
let course: string = 'Typescript';
let is_published: boolean = true;

We can write...

**/

// This is an example of declaring types implicitly
let sales = 123_456_789;
let course = 'Typescript';
let is_published = true;

// This is an example of declaring types explicitly
let salary : number  = 123_456_789;
let languaege: string = 'Typescript';
let checked: boolean = true;

console.log(sales);
console.log(course);
console.log(is_published);

