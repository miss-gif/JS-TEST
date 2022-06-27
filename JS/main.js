// 구조 분해 할당 (Destructuring assignment) 디스트럭처링
// 비구조화 할당

const user = {
  name: "akari",
  age: 85,
  email: "svx327@naver.com",
};

const { name, age, email, address } = user; // 필요한 것만 꺼내서 사용 가능
// E.g user.address

console.log(`사용자의 이름은 ${name}입니다.`); // 사용자의 이름은 akari입니다.
console.log(`${name}의 나이는 ${age}세입니다.`); // akari의 나이는 85세입니다.
console.log(`${name}의 이메일 주소는 ${email}입니다.`);
//akari의 이메일 주소는 svx327@naver.com입니다.
console.log(address); // undefined
