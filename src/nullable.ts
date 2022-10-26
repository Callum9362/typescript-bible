/** 
 * 

Nullable Types

TypeScript has two special types, null and undefined, that have the values null and undefined respectively.
By default, the type checker considers null and undefined assignable to anything. 
Effectively, null and undefined are valid values of every type. 
That means it’s not possible to stop them from being assigned to any type, even when you would like to prevent it. 

See below for an example 

**/

function greet(name: string | null | undefined){
    
    if(name)
    {
        console.log(name.toUpperCase());
    }
    console.log("Hello");
}

greet(null);