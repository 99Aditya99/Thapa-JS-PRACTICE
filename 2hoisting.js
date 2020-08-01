// eg .1 
// function sum(a,b){
//     add = a+b
//     console.log(add)
// }

// sum(5,9)


// -------------------------------------------------------------------------------------------------------------------
// eg .2 it is also possible because 
// before the function or variable is being called ,the JS engin
//is storing the function into creation phase.
// sum(5,20)
// function sum(a,b){
//     add = a+b
//     console.log(add)
// }


// -------------------------------------------------------------------------------------------------------------------

// sum= undefined
// console.log(sum)
// sum(5,20)

// const sum= (a,b)=>{
//     let add = a+b
//     console.log(add)
// }


// -------------------------------------------------------------------------------------------------------------------
 
//global execution context
console.log("i am a "+ job)
var job= "web dev"
console.log("i am a "+ job)

//whoAmI execution context
function whoAmI(){
    console.log("i am a "+ job)
    var job= "full stack"
    console.log("i am a "+ job)
}

debugger
whoAmI()