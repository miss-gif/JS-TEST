// Object.assign : 특정 객체를 복사하는 용도로 사용 가능

const userAge = {
  // key : value형태
  name: "akari",
  ahe: 85,
};
const userEmail = {
  name: "akari",
  email: "svx327@naver.com",
};

// 새로운 객체 데이터를 만들고 싶으면..
const target = Object.assign({}, userAge, userEmail); // 대상, 출처, 출처
console.log(target);
console.log(userAge);
console.log(target === userAge); // false
