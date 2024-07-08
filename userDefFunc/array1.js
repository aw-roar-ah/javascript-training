var places = new Array(4);

places[0]="Bengaluru"
places[1]="Pune"
places[2]="Patna"
places[3]="Chd"

console.log("Length: "+places.length)

console.log(places[2]);

console.log("..........Normal for loop...........")
for (let i=0;i<places.length;i++)
console.log(places[i])

console.log("............in operator...........")

for (var p in places){
    console.log(places[p])
}

console.log(".............For each loop with arrow function.........")

places.forEach(value=>{
    console.log(value)
})

console.log(".............for each loop with anonymous function...........")

places.forEach(function(value){
console.log(value)
})

console.log(places)