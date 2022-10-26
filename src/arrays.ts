/** 
 * 
Arrays

Array declarations have very similar principles to variable declarations.
There is primitive awareness from the compiler for arrays like let numbers = [1, 2, 3];
But what if we have an empty array? Like let number = []; Then the compiler applies the any type to this array.
When declaring empty arrays that we want to be one type
We have to explicity apply a type annotation like so... let number: number[] = [];

**/

let numbers: number[] = [1, 2, 3];
let names: string[] = ["Bo", "Hunter", "Nick"];