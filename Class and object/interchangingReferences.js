class car{
    model;
}

var a = new car()
var b = new car()
var c = new car()

a.model = "suzuki"
b.model = "tata"
c.model = "yamaha"

console.log(a.model)
console.log(b.model)
console.log(c.model)

a = b;
b = c;
c = a; 

console.log(a.model)
console.log(b.model)
console.log(c.model)