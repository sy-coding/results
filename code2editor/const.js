// HTML 요소(Element) 모두 검색/찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

// 찾은 요소들 반복해서 함수 실행!
// 익명 함수를 인수로 추가! (유사배열)
boxEls.forEach(function(){});

// 첫 번째 매개변수(boxEl) : 반복 중인 요소
// 두 번째 매개변수(index) : 반복 중인 번호
boxEls.forEach(function(boxEl, index){});

// 출력
boxEls.forEach(function(boxEl, index){
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});

// Getter, 값을 얻는 용도
console.log(boxEl.textContent); // Box!!

// Setter, 값을 지정하는 용도
boxEl.textContent = 'HEROPY?!';
console.log(boxEl,textContent); //HEROPY>!



const a = '가나다';
// split: 문자를 인수 기준으로 쪼개서 배열로 반환.
// reverse: 배열을 뒤집기.
// join: 배열을 인수 기준으로 문자로 병합해 반환.

const b = a.split('').reverse().join(''); // 메소드 체이닝

console.log(a); // 가나다
console.log(b); // 다나가


