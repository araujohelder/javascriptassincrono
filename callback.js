sum(2,2, function(value){
    sum(3,3, function(value){
        sum(4,4, function(value){
            sum(5,5, function(value){
                sum(6,6, function(value){
                    console.log(value)
                })
                console.log(value)
            })
            console.log(value)
        })
        console.log(value)
    }) 
    console.log(value)
})


function sum(a,b, callback) {
    setTimeout(function(){
        result = a + b
        return callback (result)
    }, 2000)
}