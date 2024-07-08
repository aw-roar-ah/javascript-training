var y = 200
function somefunc(){
    if(true)
    {
        let localVar=100
        console.log("Printing value of local variable in the block :"+localVar)
    }
    //console.log("Printing value of local variable in the module :"+localVar)
    console.log(y)
}

somefunc();
console.log(y)
//console.log(localVar)

