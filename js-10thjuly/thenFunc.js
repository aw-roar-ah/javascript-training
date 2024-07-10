function Task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true)
                resolve("Task1")
            else
                reject("Task1 didnt complete")

        }, 2000)
    })
}

function Task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           
                if (true)
                    resolve("Task2")
                else
                    reject("Task2 didnt complete")


            }, 2000)
        })
    }


function Task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           
                if (true)
                    resolve("Task3")
                else
                    reject("Task3 didnt complete")

            }, 2000)
        })
    }


function Task4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           
                if (false)
                    resolve("Task4")
                else
                    reject("Task4 didnt complete")

            }, 2000)
        })
    }
 
Task1().then(value => {
    console.log(value)
    return Task2()
})
    .then(value => {
        console.log(value)
        return Task3()
    })
    .then(value => {
        console.log(value)
        return Task4()
    })
    .then(value => {
        console.log(value)
        console.log("Finished")
    }).catch((err)=>{
        console.log(err)
    })


