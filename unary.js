//unary operators
console.log("----------(+)unary operator----------------------------------")
var str='10'
var str = +str
console.log(typeof(str))

var isNum=true;
console.log(typeof(isNum))

var isNum =+isNum
console.log(typeof(isNum))

console.log("----------(-)unary operator----------------------------------")

var num = -10
var newNum = -num
console.log(newNum)

console.log("-----------------(++)unary operator")

var num2 = 10;
var num3 = 20;
console.log(num2++)
console.log(++num3)
console.log("---------------------(--)unary operator")

var num4 = 10;
var num5 = 20;
console.log(num4--)
console.log(--num5)