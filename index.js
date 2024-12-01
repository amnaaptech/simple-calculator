"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    { message: "Entre frist number", type: "number", name: "firstnumber" },
    { message: "Entre Second number", type: "number", name: "secondnumber" },
    { message: "Select one of the operator to perfrom operation", type: "list", name: "operator", choices: ["Addition", "subtraction", "multiplication", "division"],
    },
]);
// console.log(answer);
// conditional statements
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please select valid operator");
}
;
