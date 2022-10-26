 /** 
 * 

Objects

In JavaScript objects are dynamic. Meaning we can change the structure during the liftetime of a program.

This is *** NOT **** the case in Typescript. 
The compiler will infer the structure/shape of an object based on its declaration.

**/

let employee: 
{
    readonly id: number,
    name: string
    retire: (date: Date) => void
} = 
{ 
    id: 1, 
    name: "C",
    retire: (date: Date) => {
        console.log(date);
    }
};
