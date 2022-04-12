
//데이터 종류(자료형)

//데이터로 사고하면서 학습 (데이터가 반복되어서 시스템이 만들어지는)

//String(문자 데이터)
//따옴표를 사용합니다
let myName = "HEROPY"; // let 변수 선언, ""나 ''로 묶은 데이터는 문자데이터
let email = 'thesecond@gmail.com';
let hello = `Hello ${myName}?!` // 보간법(`` 벡틱기호 사용하는 문자데이터)

console.log(myName); // HEROPY
console.log(email); // thesecond@gmail.com
console.log(hello); // Hello HEROPY?!

//Number (숫자 데이터)
//정수 및 부동소수점 숫자를 나타냅니다.
let number = 123; // 숫자는 따옴표 안 씀
let opacity = 1.57;

console.log(number); // 123
console.log(opacity); // 1.57

//Boolean (불린 데이터)
//true, false 두 가지 값밖에 없는 논리데이터
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

//Undefined
//값이 할당되지 않은 상태를 나타냅니다.
let undef;
let obj = {abc:123};

console.log(undef); // undefined
console.log(obj.abc); // 123
console.log(obj.xyz); // undefined

//Null
//어떤 값이 의도적으로 비어있음을 의미합니다.
let empty = null;

console.log(empty); // null

//Object
//여러 데이터를 Key:Value 형태로 저장합니다 {}
let user = {
  // Key : Value,
  name : 'HEROPY',
  age : 85,
  isValid : true
};

console.log(user.name); // HEROPY
console.log(user.age); // 85
console.log(user.isValid); // true

//Array (배열 데이터) 
//여러 데이터를 순차적으로 저장합니다. []  cf. {} 객체 [] 배열
let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]); // 'Apple'
console.log(fruits[1]); // 'Banana'
console.log(fruits[2]); // 'Cherry'


let myName = "HEROPY";
let email = 'thesecond@gmail.com';
let hell = `Hello ${false}?!`; // 문자를 보관하기 위해 사용

console.log(myName); // HEROPY
console.log(email); // thesecond@gmail.com
console.log(hello); // Hello false?!


let user = {
  name : 'HEROPY';
  age : 85,

};

console.log(user);
console.log(user.age); // property(속성)을 출력
console.log(name.age); // 점 표기법


// 변수 var, let, const 데이터를 저장하고 참조(사용)하는 데이터의 이름

// let 재사용이 가능!, 변수선언!

let a = 2;
let b = 5;

console.log(a+b); // 7
console.log(a-b); // -3
console.log(a*b); // 10
console.log(a/b); // 0.4

// let은 값(데이터)의 재할당 가능!
let a = 12;
console.log(a); // 12

a = 999;
console.log(a); // 999

// const는 값(데이터)의 재할당 불가!
let a = 12;
console.log(a); // 12

a = 999;
console.log(a); // TypeError: Assignment to constant variable.

// 변수를 새로 만들 때 변수는 재할당을 불가능한 경우에는 const, 가능하게 만들 경우에는 let으로 


// 예약어 (특별한 의미를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어 Reserved Word)

let this = 'Hello!'; // SyntaxError
let if = 123; // SyntaxError
let break = true; // SyntaxError

// 함수 특정동작(기능)을 수행하는 일부 코드의 집합(부분) function

// 함수 선언
function helloFunc() {
  //실행 코드
  console.log(1234);
}

// 함수 호출
helloFunc(); // 1234

function returenFunc() {
  return 123;
}

let a = returnFunc();
console.log(a); // 123

// 함수 선언!
function sum(a,b) { // a와 b는 매개변수(parameters)
  return a+b;
}

//재사용!
let a = sum(1,2); // 1과 2는 인수(Arguments)
let b = sum(7,12);
let c = sum(2,4);

console.log(a,b,c); // 3, 19, 6



// 기명(이름이 있는) 함수
// 함수 선언!
function hello() {
  console.log('Hello~');
}

// 익명(이름이 없는) 함수
// 함수 표현!
let world = function() {
  console.log('World~');
}

// 함수 호출!
hello(); // Hello~
world(); // World~

// Hoisting

// 객체 데이터
const heropy = {
  name : 'HEROPY',
  age : 85,
  //메소드(method)
  getName : function(){
    return this.name;
  }
};

const hisName = heropy.getName();
console.log(hisName); // HEROPY
// 혹은
console.log(heropy.getName()); // HEROPY

// 조건문 : 조건의 결과(truthy/falsy)에 따라 다른 코드를 실행하는 구문 if, else

let isShow = true;
let checked = false;

if(isShow) {
  console.log('Show'); // Show (true)
}

if(checked) {
  console.log('Checked'); // X (false)
}

let isShow = true; // false면 Hide?
if (isShow) {
  console.log('Show!');
}else {
  console.log('Hide?');
}


// DOM (Document Object Model) API (Application Programming Interface) 문서 내 객체들이 잇는 웹사이트가 동작하기 위한 
