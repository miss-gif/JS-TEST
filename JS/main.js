const user = {
  name: "akari",
  ahe: 85,
  email: "svx327@naver.com",
};

const keys = Object.keys(user);
console.log(keys);
// ['name', 'age', 'email'] 프로퍼티 이름만 추출해서 배열로 만들어 줌

console.log(user["email"]); // ['name', 'ahe', 'email']
// 객체 데이터에서 사용 가능한 인덱싱 방법

const values = keys.map((key) => user[key]);
console.log(values); // ['akari', 85, 'svx327@naver.com']
// 값만 가지고 있는 배열 데이터를 만들 수 있음
