/** 
 * 

Unions

A union type describes a value that can be one of several types.
We use the vertical bar | to seperate each type.

See below for an example

**/

function kgToLbs(weight: number | string) : number {
    // Narrowing
    if(typeof weight === 'number')
    {
        return weight * 2;
    }
    return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');