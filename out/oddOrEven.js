"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oddOrEven = void 0;
function oddOrEven(numbers) {
    var result = 0;
    for (var index in numbers) {
        result += numbers[index];
    }
    if ((result % 2) == 0)
        return "Even";
    else
        return "Odd";
}
exports.oddOrEven = oddOrEven;
