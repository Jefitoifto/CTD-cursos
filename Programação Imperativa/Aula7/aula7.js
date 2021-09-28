console.log('O resultado de:!true  ',!true) 
console.log('O resultado de:!false  ',!false) 
console.log('O resultado de:!!false  ',!!false)  
console.log('O resultado de:!!true  ',!!true) 
console.log('O resultado de:!1  ',!1) 
console.log('O resultado de:!!1  ',!!1) 
console.log('O resultado de:!0  ',!0) 
console.log('O resultado de:!!0  ',!!0)  
console.log('O resultado de:!!""  ',!!"") 
let x = 5
let y = 9

console.log('O resultado de x < 10 && x!==5 é: ', x < 10 && x!==5)
console.log('O resultado de x < 10 && x!==5 é: ', x>9 || x===5)
console.log('O resultado de x < 10 && x!==5 é: ', !(x===y))

let a=10
let b ="a"
console.log('O resultado de b==="X" || x >= 10: ', b==="X" || a >= 10)

let c=3
let d=8
console.log('O resultado de !(x == "3" || x === y) && !(y !== 8 && x <= y): ', !(c == "3" || c === d) && !(d !== 8 && c <= d))

let str = ""
let msg = "haha!"
let eBonito = "false"
console.log('O resultado de !((str || msg) && eBonito): ', !((str || msg) && eBonito))