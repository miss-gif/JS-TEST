function 유저(성, 이름) {
  this.성name = 성; //  this.성name에 "성"이라는 매개변수 할당
  this.이름name = 이름; // this.이름name에 "이름"이라는 매개변수 할당
}

유저.prototype.풀네임 = function () {
  return `${this.성name} ${this.이름name}`;
};

const 홍길동 = new 유저("홍", "길동"); // 여기서 new는 생성자 함수
const 김철수 = new 유저("김", "철수");
const 김이솔 = new 유저("김", "이솔");

console.log(홍길동.풀네임()); // 홍 길동
console.log(김철수);
console.log(김이솔);

// 여기서 this는 생성자 함수 new를 통해 생성된 홍길동, 김철수, 김이솔을 지칭함
// new를 키워드를 통해 생성자 함수로 실행한 결과를 반환해서 할당된 변수를 인스턴스라 부름
// const 홍길동, const 김철수, const 김이솔 = 인스턴스
