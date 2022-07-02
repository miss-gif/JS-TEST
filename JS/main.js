// JSON (JavaScript Object Notation)
// 자바스크립트의 객체 표기법

import myData from "../myData.json";
console.log(myData);

const user = {
  name: "abc",
  age: 33,
  email: ["aaa@naver.com", "bbb@naver.com"],
};

console.log("user", user);

const str = JSON.stringify(user);
console.log("str", str);
console.log(typeof str);

const obj = JSON.parse(str);
console.log("obj", obj);
