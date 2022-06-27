// 배열 데이터가 추가 된다면

const fruits = ["사과", "바나나", "체리", "오렌지"];

function toObj(a, b, ...c) {
  return {
    a: a,
    b: b,
    c: c,
  }; // ...c를 rest parameter(나머지 매개변수)
}

console.log(toObj(...fruits)); // {a: '사과', b: '바나나', c: ['체리', '오렌지']}

// 변수명과 속성명이 같으면 생략 가능

const fruits = ["사과", "바나나", "체리", "오렌지"];

function toObj(a, b, ...c) {
  return {
    a, // 생략
    b, // 생략
    c, // 생략
  };
}

console.log(toObj(...fruits));

// 축약형 작성

const fruits = ["사과", "바나나", "체리", "오렌지"];
const toObj = (a, b, ...c) => ({ a, b, c });
console.log(toObj(...fruits));
