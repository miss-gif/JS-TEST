import _ from "lodash"; // 기본 통로의 데이터

const userA = [
  { userId: "1", name: "AKARI" },
  { userId: "2", name: "NEO" },
];

const userB = [
  { userId: "1", name: "AKARI" },
  { userId: "3", name: "MAY" },
];

const userC = userA.concat(userB);
console.log("concat", userC);

// concat은 userA와 userB 배열을 병합하고 반환함

console.log("uniqBy", _.uniqBy(userC, "userId"));

// uniqBy(중복 된 내용이 있는 배열, "중복을 구분 할 속성"))
// 하나의 배열 데이터에서 특정한 속성의 이름으로 고유화 시켜주는 메소드

const userD = _.unionBy(userA, userB, "userId");
console.log("unionBy", userD);

// unionBy 배열 합치기 전에 사용
// unionBy (합칠 배열A, 합칠 배열B, "고유 값")
// 배열이 여러 개 일 때 사용
