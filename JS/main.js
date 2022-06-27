const userAge = {
  // key : value형태
  name: "akari",
  ahe: 85,
};
const userEmail = {
  name: "akari",
  email: "svx327@naver.com",
};

const target = Object.assign(userAge, userEmail); // 대상 객체, 출처 객체
console.log(target);
console.log(userAge);
console.log(target === userAge); // true 같은 메모리 주소를 보고 있음.

const a = { k: 123 };
const b = { k: 123 };
console.log(a === b); // false
// 다른 메모리 주소를 보고 있음. 참조형 데이터(객체, 배열, 함수)의 특징
