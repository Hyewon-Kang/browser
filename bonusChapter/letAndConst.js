/*
    변수는 프로그래밍 언어에서 우리가 처리해야하는 데이터를 담고 있음.
    변수를 통해 데이터를 처리할 수 있음
    변수명은 어떤 정보를 갖고 있는지 유추하기 쉽게 짓는게 좋음
    변수를 선언하는 동시에 메모리에 변수를 위한 공간이 생김
    변수에 데이터를 할당하면 메모리에 데이터가 들어감
*/

// number, string, boolean, null, undefined, symbol을 제외한 모든 것들은 Object
// Object는 최소한 한두가지의 다양한 데이터를 한군데에 묶어놓은 것.
// ex. 배열, 리스트, 함수 등

let age = 2;
let age2 = age;

// 위처럼 age2에 age를 할당하면, 메모리에 age2를 위한 공간이 생기고, age에 들어있는 데이터 값을 복사해서 age2에 할당함.

age2 = 3;

// object
let obj = {
  name: "ellie",
  age: 5,
};

// object에 있는 키는 각각의 메모리 공간이 생김.
// obj에는 각각의 키가 묶여있는 주소값이 들어감.

console.log(obj.name); // ellie

let obj2 = obj; // obj의 주소'만' 복사됨
obj.name = "James";
console.log(obj.name); // James
console.log(obj2.name); // James

// obj와 obj2는 같은 레퍼런스 값을 갖고 있기 때문에 obj에서 데이터 값을 변경하면 obj2에도 변경된 값이 반영됨

// let과 const의 차이점은 let은 나중에 값을 변경할 수 있지만, const는 나중에 값을 변경할 수 없음
const obj = {
  name: "ellie",
  age: 5,
};

// const로 오브젝트를 만들어도 obj 변수 안에는 레퍼런스 값만 들어감.
// 오브젝트는 어딘가에 따로 저장되어 있고, 레퍼런스가 가리키고 있는 안의 내용은 변경이 가능함.

obj.name = "James";
