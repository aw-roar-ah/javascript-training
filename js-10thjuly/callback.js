function Task1(callback){
    setTimeout(()=>{
        console.log("Task1")
        callback()
    },2000)
}

function Task2(callback){
    setTimeout(()=>{
        console.log("Task2")
        callback()
    },500)
}

function Task3(callback){
    setTimeout(()=>{
        console.log("Task3")
        callback()
    },200)
}

function Task4(callback){
    setTimeout(()=>{
        console.log("Task4")
        callback()
    },3000)
}

Task1(()=>
{
    Task2(()=>
    {
        Task3(()=>
        {
            Task4(()=>{
                console.log("Finished")
            })
        })
    })
})
