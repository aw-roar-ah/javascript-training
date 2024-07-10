import{PI,car,login} from './test1.js'


console.log(PI)

login()

var c = new car()
c.start()
c.model="bmw"
console.log(c.model)

console.log("....................................")

import * as object from './test1.js'
console.log(object.PI)

object.login()

var c = new object.car()
c.start()
c.model="bmw"
console.log(c.model)
