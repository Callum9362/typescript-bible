"use strict";
function calculateTax(income, taxYear = 2022) {
    return taxYear < 2022 ? income * 1.2 : income * 1.3;
}
console.log(calculateTax(4, 2022));
console.log(calculateTax(4));
//# sourceMappingURL=functions.js.map