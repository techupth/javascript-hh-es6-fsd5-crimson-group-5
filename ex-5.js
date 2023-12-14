function sum(...num) {
  // Start coding here !
  // num.reduce((acc,cur)=>{return acc+cur}) ทำไมผิด
  return num.reduce((acc,cur)=> acc+cur)
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);
console.log(result1)

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
