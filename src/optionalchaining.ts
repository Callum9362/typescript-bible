 /** 
 * 

Optional Chaining

Optional Chaining allows you to write code which can immediately stop running expressions when it hits a null or undefined. 

See below for an example. 

**/

type Customer = {
    birthday?: Date
}

function getCustomer(id: number) : Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
let customer2 = getCustomer(1);

// Not the ? after customer. This is called option property access operator.
console.log(customer?.birthday?.getDay);
console.log(customer2?.birthday?.getDay);

// Option element access operator used when dealing with arrays.
// customers?.[0]

// Optional call
let log: any = null;
log?.('a');