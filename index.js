"use strict";
/*
리턴 할 수 있는 값을 정의 내릴 수 있다.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const name = "geonil", age = 28, gender = "mail";
const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, ${gender}`);
    return `Hello ${name}, you are ${age}, ${gender}`;
};
sayHi("geonil", 28, "mail");
//# sourceMappingURL=index.js.map