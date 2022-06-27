// 객체에서 꺼내오는 속성 이름이 마음에 안들 때, 변수명을 바꾸는 방법
const user = {
  name: "akari",
  age: 85,
  email: "svx327@naver.com",
};

const { name: akari, age, email, address } = user;
// E.g user.address

console.log(`사용자의 이름은 ${akari}입니다.`);
console.log(`${akari}의 나이는 ${age}세입니다.`);
console.log(`${akari}의 이메일 주소는 ${email}입니다.`);
console.log(address);
