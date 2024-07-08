var d = new Date()

console.log(d)
console.log("year: "+d.getFullYear())
console.log("day: "+d.getDay())
console.log("time: "+d.getHours())

if(d.getDay()==0)
{
    console.log("Sunday")
}
else if(d.getDay()==1)
{
    console.log("Monday")
}
else if(d.getDay()==2)
    {
        console.log("Tuesday")
    }
else if(d.getDay()==3)
    {
        console.log("Wednesday")
    }
else if(d.getDay()==4)
    {
        console.log("Thursday")
    }

