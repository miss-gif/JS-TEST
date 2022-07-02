import _ from "lodash"; // 기본 통로의 데이터

const users = [
  { userId: "1", name: "AKI" },
  { userId: "2", name: "HUYU" },
  { userId: "3", name: "NATSU" },
  { userId: "4", name: "HARU" },
  { userId: "5", name: "AME" },
  { userId: "6", name: "HIKARI" },
];

const foundUser = _.find(users, { name: "NATSU" }); // find(대상 배열, { 찾는 기준 }) 객체 반환
const foundUserIndex = _.findIndex(users, { name: "NATSU" }); // findIndex(대상 배열, { 찾는 기준 }) 인덱스 반환

console.log(foundUser);
console.log(foundUserIndex);

_.remove(users, { name: "AKI" }); // remove(대상 배열, { 기준 }) 삭제
console.log(users);
