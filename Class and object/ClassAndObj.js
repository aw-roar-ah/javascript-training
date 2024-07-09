class car{
    model;
    price;
    wheels;
    updated_price;

    //default constructor
    // constructor(){
    //     console.log("car starts khud se hi")
    // }
    
    //parametrized constructor
    constructor(model)
    {
        console.log("model of the car is" +model)
    }


    start()
    {
        console.log("car starts")
    }
    
    start(key)
    {
        console.log("car starts with key"+key)
    }
    stop()
    {
        console.log("car stops")
    }

}

new car()

// var c = new car();
// c.model = " bmw "
// c.price = 20000
// c.wheels = 4
// c.updated_price = 19999

// console.log("model kaun sa hai? "+c.model)
// console.log("rate kitna hai bhaiya? "+c.price)
// console.log("chakke sahi salaamat hain?"+c.wheels)
// console.log("sahi sahi laga lo bhaiya: "+c.updated_price)
// start()