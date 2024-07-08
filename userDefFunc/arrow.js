//arrow functiojn for addition of 3 numbers

var add1 = (a,b,c)=>a+b+c;
console.log(add1(3,4,5))

var add2 = (x,y,z)=>console.log("Addition is : "+(x+y+z))
add2(6,7,8)

//arrow function for square of a numebr

var s = a=>a**2
console.log("square is : " +s(2))

greet = ()=>console.log("Hello")
greet();

//printing 1 to 10

var q = ()=>
{
    for(i=1;i<=10;i++)
        console.log(i)
}
q()