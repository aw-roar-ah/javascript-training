// array1= [2,4,6,8,12]

// result array = array2 = [4,16,36,64,100,144]

var array1= [2,4,6,8,10,12]

var array2 = new Array(6)

for (i=0;i<array1.length; i++)
{
    array2[i] = array1[i]**2
}

console.log(array2)