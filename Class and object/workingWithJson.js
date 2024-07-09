var obj = require('./text.json')

console.log("url = "+obj.url)
console.log("id = "+obj.id)
console.log("name = "+obj.name)
console.log("un1 = "+obj.userdetails.un1)
console.log("password = "+obj.userdetails.upwd1)
 
console.log(".................................")

console.log("length of array: "+obj.login.length)
obj.login.forEach(value=>(console.log(value.Name+"password is : "+value.pwd)))