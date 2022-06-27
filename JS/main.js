// 전개 연산자 (Spread)

const fruits = ["사과", "바나나", "체리"];
console.log(fruits); // ['사과', '바나나', '체리'] -- 배열 데이터
console.log(...fruits); // 사과 바나나 체리 -- 문자 데이터

function toObj(a, b, c) {
  return {
    a: a,
    b: b,
    c: c,
  };
}

console.log(toObj(...fruits));
// {a: '사과', b: '바나나', c: '체리'}
console.log(toObj(fruits[0], fruits[1], fruits[2]));
// {a: '사과', b: '바나나', c: '체리'}
