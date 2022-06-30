`로컬 스토리지`

데이터가 삭제되지 않고 유지된다. (활용성이 높음)

`세션 스토리지`

페이지를 닫을 때 데이터도 함께 삭제된다.

로컬 스토리지에 저장하는 방법

`localStorage.setItem('myCat', 'Tom');`

myCat = key값

Tom = value값

로컬 스토리지 값을 불러오는 방법

`const cat = localStorage.getItem('myCat');`

로컬 스토리지 값을 삭제하는 방법

`localStorage.removeItem('myCat');`

---

**로컬 스토리지에 객체 데이터를 저장하고 싶으면 문자 데이터로 변환해서 저장 해야한다.**

`JSON.stringify()`

자바스크립트 데이터를 문자 데이터화 시키는 명령어

```jsx
const user = {
  name: "abc",
  age: 33,
  email: ["aaa@naver.com", "bbb@naver.com"],
};

localStorage.setItem("user", JSON.stringify(user));
```

저장된 데이터를 가져와서 콘솔에 출력하려면

```jsx
console.log(localStorage.getItem("user"));
//{"name":"abc","age":33,"email":["aaa@naver.com","bbb@naver.com"]}
```

하지만, 문자 데이터로 출력이 된다.

활용하기 편한 객체 데이터로 변환하려면..

`JSON.parse`

JSON문자열의 구문을 분석하고 JS값이나 객체를 생성한다

```jsx
console.log(JSON.parse(localStorage.getItem("user")));
// {name: 'abc', age: 33, email: Array(2)}

```

로컬 스토리지의 데이터를 삭제하는 방법

```jsx
localStorage.removeItem("user");
```

로컬 스토리지의 데이터를 수정하는 방법

```jsx
const str = localStorage.getItem("user");
const obj = JSON.parse(str);
obj.age = 22;
console.log(obj);

localStorage.setItem("user", JSON.stringify(obj));
```

1. 저장된 데이터를 가지고 온다
2. 불러온 데이터를 담아둔다
3. 불러온 데이터를 객체화 시킨다
4. 데이터를 수정한다
5. 수정한 데이터를 로컬 스토리지에 저장한다

---

브라우저의 로컬 스토리지에 저장하는 방법이다.

하지만, 이런 방식으로 데이터를 다루는 것은 원시적이다.