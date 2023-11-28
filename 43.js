// const promise = new Promise((resolve, reject) => {
//     resolve({ user: "Blanka" })
// })

// promise
//     .then((data) => {
//         const user = data
//         return fetch("https://jsonplaceholder.typicode.com/todos/1")
//     })
//     .then((todos) => {
//         console.log(todos)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

async function getTodos(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
    } catch (err){
        console.log("Something went wrong...")
        console.log(err)
    }
}

getTodos();