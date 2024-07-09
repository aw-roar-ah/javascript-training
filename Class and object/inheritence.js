class car{
    model;

    constructor(){
        console.log("car constructor")
    }

    start(){
        console.log("car starts")
    }

    stop(){
        console.log("car stops")
    }
}

class BMW extends car{
    constructor()
    {
        super();
        console.log("BMW constructor")
    }

    start(){
        console.log("iska apna kkhud ka start hai")
    }

    theftsafety(){
        console.log("for safety purpose")
    }
}

var b = new BMW()
b.start()
b.stop()
b.theftsafety()
b.model = "skoda"
console.log(b.model)