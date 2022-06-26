// 일반 함수
const timer = {
  name: "akari",
  timeout: function () {
    // setTimeout(함수, 시간)
    setTimeout(function () {
      console.log(this.name); // undefined
    }, 2000);
  },
};
timer.timeout(); // undefined

// 화살표 함수
const timer = {
  name: "akari",
  timeout: function () {
    // setTimeout(함수, 시간)
    setTimeout(() => {
      console.log(this.name); // akari
    }, 2000);
  },
};
timer.timeout(); // akari

// setTimeout나 setInterval 함수를 사용할 때에는 콜백으로 일반 함수를 사용하는 것 보다
// 화살표 함수를 사용하는 하는 것이 활용도가 높다.
