"use strict"
// in js we can assign afunction to a veriable
// const student ={
//     name:"Ali baba",
//     age:145,
//     city:"Lahore",
//     place:function(){
//         console.log(`student is from ${this.city}`)
//     }
// }
// student.place()




//pass a function as an argument
// function hello(){
//     return " hello dude"
// }
// function callbackEx(name,callback){
//     console.log(name+callback())
// }

// callbackEx("Ali",hello)




//returning function
function a(){
    return (
        function c(){
            console.log("i am from c()")
        }
    )
}

a()()
const c= a()
c()