class car{
    model;
    price;

    constructor(model,price)
    {
        this.model=model
        this.price=price
        this.start()
       // console.log(this.model,this.price)
    }

    start(){
        console.log("start karo gaadi")
    }
}

var c = new car("BMW",20000)
console.log(c.model)
console.log(c.price)
var d = new car("Skoda",43837589356872356)
console.log(d.model)
console.log(d.price)

new car("maruti",2000)