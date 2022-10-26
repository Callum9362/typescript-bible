/** 
 * 
Any Type

In Typescript if we do not intialise a variable example let level;
Typescript compiler will assume that this type is any. This does pose a threat to you application.
The strict type functionality on this variable is no longer applied. Beware!
As a best practice avoid using any type as much as possible.


**/

let level;

level = 1;
console.log(level);

level = 'a';
console.log(level);