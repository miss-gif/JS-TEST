// Class 사용 후
class 유저 {
  constructor(first, last) {
    this.firstName = first; //  this.firstName에 "first"이라는 매개변수 할당
    this.lastName = last; // this.lastName에 "last"이라는 매개변수 할당
  }
  풀네임() {
    return `${this.firstName} ${this.lastName}`; // 띄어쓰기로 구분함
  }
}

const 홍길동 = new 유저("홍", "길동"); // 여기서 new는 생성자 함수
const 김철수 = new 유저("김", "철수");
const 김이솔 = new 유저("김", "이솔");

console.log(홍길동.풀네임()); // 홍 길동 -- 풀네임이란 메소드 실행
console.log(김철수);
console.log(김이솔);
