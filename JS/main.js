import _ from "lodash"; // lodash 패키지 사용

const user = {
  name: "Akari",
  age: 85,
  emails: ["svx327@naver.com"],
};
const copyUser = _.cloneDeep(user); // cloneDeep라는 메소드를 사용
console.log(copyUser === user); // false

user.age = 22;

console.log("user", user); // {name: 'Akari', age: 22, emails: Array(1)}
console.log("copyUser", copyUser); // {name: 'Akari', age: 85, emails: Array(1)}

console.log("------");
console.log("------");

user.emails.push("svx327@nate.com");
console.log(user.emails === copyUser.emails); // false
console.log("user", user); // {name: 'Akari', age: 22, emails: Array(2)}
console.log("copyUser", copyUser); // {name: 'Akari', age: 85, emails: Array(1)}
