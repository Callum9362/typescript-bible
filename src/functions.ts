 /** 
 * 

Functions

Best practice is too properly annote your functions. function calculateTax(income: number) : number (note number declarations)
This allows for any errors in the code to be highlighted earlier.
There are many compiler options you can change to help with editor hints and forward thinking error handling.

**/

function calculateTax(income: number, taxYear = 2022) : number
{
    return taxYear < 2022 ? income * 1.2 : income * 1.3;
}

console.log(calculateTax(4, 2022));
console.log(calculateTax(4));