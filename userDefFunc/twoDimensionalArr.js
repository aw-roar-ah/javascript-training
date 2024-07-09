var credentials = [["Name","pwd1"], ["Name2","pwd2"], ["Name3","pwd3"]]

console.log("row count: "+credentials.length);
console.log("col count: "+credentials[2].length);

for (let i=0;i<credentials.length;i++)
{
    for (j=0;j<credentials[i].length;j++)
    {
        console.log(credentials[i][j])
    }
}

console.log(credentials)
credentials.push(["Name4","pwd4"])
console.log(credentials)
credentials.pop()
console.log(credentials)
// credentials[0][1].replace("rashmi")
// console.log(credentials)

//flat() will convert 2D array into 1D array

console.log(credentials.flat())

var arr = credentials.flat()
arr.pop()
console.log(arr)
