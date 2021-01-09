"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "kim",
    gender: "male",
    age: 22
};
const name = "Kim", age = 23, gender = "male";
const sayHi = (person) => {
    return `Hello ${name}, you are ${age}, you are a ${gender}!`;
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map