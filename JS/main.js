// Object.assign()으로 얕은 복사
const user = {
  name: "Akari",
  age: 85,
  emails: ["svx327@naver.com"],
};
const copyUser = Object.assign({}, user);
console.log(copyUser === user); // false

user.age = 22;

console.log("user", user); // {name: 'Akari', age: 22, emails: Array(1)}
console.log("copyUser", copyUser); // {name: 'Akari', age: 85, emails: Array(1)}

// 전개 연산자로 얕은 복사
const user = {
  name: "Akari",
  age: 85,
  emails: ["svx327@naver.com"],
};
const copyUser = { ...user };
console.log(copyUser === user); // false

user.age = 22;

console.log("user", user); // {name: 'Akari', age: 22, emails: Array(1)}
console.log("copyUser", copyUser); // {name: 'Akari', age: 85, emails: Array(1)}

// 얕은 복사의 한계
const user = {
  name: "Akari",
  age: 85,
  emails: ["svx327@naver.com"],
};
const copyUser = { ...user };
console.log(copyUser === user); // false

user.age = 22;

console.log("user", user); // {name: 'Akari', age: 22, emails: Array(1)}
console.log("copyUser", copyUser); // {name: 'Akari', age: 85, emails: Array(1)}

user.emails.push("svx327@nate.com");
// emails는 배열 데이터(참조형 데이터), 같은 주소를 공유하고 있음
console.log(user.emails === copyUser.emails); // true
console.log("user", user); // {name: 'Akari', age: 22, emails: Array(2)}
console.log("copyUser", copyUser); // {name: 'Akari', age: 85, emails: Array(2)}
