var haveGotDistinction = false
var areYouAbove18 = true; 

//Logical AND - true && true ---true, in all other cases it is false
//Logical OR - false||false ---false, in all other cases it is true

console.log("you are eligible for IAS: " + (haveGotDistinction && areYouAbove18))
console.log("you are elgible: "+ (haveGotDistinction || areYouAbove18))