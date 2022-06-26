// 일반(Norml) 함수는 호출 위치에 따라 this 정의!
// 화살표(Arrow) 함수는 자신의 선언된 함수 범위에서 this 정의

const AKARI = {
  name: "AKARI",
  norml: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

AKARI.norml(); // AKARI
AKARI.arrow(); // undefined

const NENE = {
  name: "Nene",
  norml: AKARI.norml,
  arrow: AKARI.arrow,
};

NENE.norml(); // Nene
NENE.arrow(); // undefined
