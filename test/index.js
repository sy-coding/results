// 참고 사항
// require와 module.exports는 node.js에서만 사용하는 내장함수
// (VanillaJS에서는 사용이 제한된다)

const calc = require("./calc");

console.log(calc.add(1,2));
console.log(calc.add(4,5));
console.log(calc.sub(10,2));

