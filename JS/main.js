class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}

const myVehicle = new Vehicle("운송수단", 2);
console.log(myVehicle); // 객체 데이터 생성을 확인 할 수 있음

class Bicycle extends Vehicle {
  // Vehicle 데이터를 extends 확장(상속)을 통해 사용하겠다.
  constructor(name, wheel) {
    super(name, wheel); // 여기서 super는 Vehicle
  }
}

const myBicycle = new Bicycle("삼천리", 2);
const daughtersBicycle = new Bicycle("세발", 3);
console.log(myBicycle);
console.log(daughtersBicycle);

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license; // 새로운 로직
  }
}

const myCar = new Car("벤츠", 4, true);
const daughtersCar = new Car("포르쉐", 4, false);
console.log(myCar);
console.log(daughtersCar);
