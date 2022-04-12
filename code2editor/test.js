let boxEl = document.querySelector('.box');
console.log(boxEl);

// HTML 요소(Element) 1개 검색/찾기 > 변수에 반환
const boxEl = document.querySelector('.box'); // const 재할당 X

// HTML 요소에 적용할 수 있는 메소드!
boxEl.addEventListener();

// 인수(Arguments)를 추가 가능!
boxEl.addEventListener(1, 2);

// 1 - 이벤트(Event, 상황)
boxEl.addEventListener('click', 2);

// 2 - 핸들러(Handler, 실행할 함수 = 명령을 가진 집합을 함수라 함)
boxEl.addEventListener('click', function (){
  console.log('Click~!');
});

// 요소의 클래스 정보 객체 활용!
boxEl.classList.add('active');
let isContains = box.classList.contains('active'); // active가 포함되어있는지, let 할당 계속 가능
console.log(isContains); // true

box.classList.remove('active');
isContains = box.classList.contains('active');
console.log(isContains); // false

