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

    async function callme(){
        try{
            const resultOfTask1 = await Task1()
            console.log(resultOfTask1)

            const resultOfTask2 = await Task2()
            console.log(resultOfTask2)

            const resultOfTask3 = await Task3()
            console.log(resultOfTask3)

            const resultOfTask4 = await Task4()
            console.log(resultOfTask4)

            console.log("Finished")



        }catch(Error){
            console.log(Error)
        }
    }
    callme()