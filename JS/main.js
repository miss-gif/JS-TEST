const 홍길동 = {
  성: "홍",
  이름: "길동",
  풀네임: function () {
    return `${this.성} ${this.이름}`;
  },
};
console.log(홍길동.풀네임());

const 김철수 = {
  성: "김",
  이름: "철수",
  풀네임: function () {
    return `${this.성} ${this.이름}`;
  },
};
console.log(김철수.풀네임());

const 김이솔 = {
  성: "김",
  이름: "이솔",
  풀네임: function () {
    return `${this.성} ${this.이름}`;
  },
};
console.log(김이솔.풀네임());

// 로직은 같으나 중복 코드가 사용되어 효율이 떨어짐 (메모리 누수)
