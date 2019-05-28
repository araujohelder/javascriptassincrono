let promise = new Promise((resolve, reject) => {
    resolve('OK')
})


promise.then((data) => {
    console.log(`Sucesso ${data}`)
    throw new Error("Error 2")
    return data
}).then((data2) => {
    console.log(` sucesso 2 ${data2}`)
})
.catch((err) => {
    console.log(`falha ${err} cat`)
})