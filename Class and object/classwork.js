var names = ["Ram","Krish","Raj","Mohan","Chandru","Ashish"]

//WAP to print only names starting with R/r


for (i=0;i<names.length;i++)
{
   var str = names[i]
   if (str.charAt(0)=="R"|| str.charAt(0)=="r")
   {
    console.log(str)
   }
}
console.log("...........................................................")
//WAP to print only names having 5 chars

for (i=0;i<names.length;i++)
{
    var str = names[i]
    if (str.length==5)
    {
        console.log(str)
    }
}

console.log("...........................................................")

//WAP to print only names having char 'a'

for (i=0;i<names.length;i++)
    {
       var str = names[i]
      if(str.includes("a") || str.includes("A"))
        console.log(str)
    }
    
