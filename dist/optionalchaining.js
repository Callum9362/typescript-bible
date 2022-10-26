"use strict";
var _a, _b;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
let customer2 = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getDay);
console.log((_b = customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday) === null || _b === void 0 ? void 0 : _b.getDay);
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=optionalchaining.js.map