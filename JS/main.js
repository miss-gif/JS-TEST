// 기본값 지정 방법 (자주 사용하진 않으나 필요한 경우가 있음)
const user = {
  name: "akari",
  age: 85,
  email: "svx327@naver.com",
};

const { name, age, email, address = "KR" } = user; // address에 기본값 지정 방법

console.log(address); // KR
