// A inner function can always access its parent as well as 
//global execution context

// eg.1  lexical scope chain

// var a ="hello world"
// function parent(){
//     let b ="hello parent"
//     child()
//     function child(){
//         let c = "hello child"
//         console.log(`${a} ${b} ${c}`)
//     }
// }
// parent()



// // eg.2

// var a ="hello world"
// function parent(){
//     let b ="hello parent"
//     child()
//     // parent cant access its child variable
//     console.log(`${a} ${b} ${c}`)
//     function child(){
//         let c = "hello child"
        
//     }
// }
// parent()

// eg.3 its not possible both function has different 
// execution context but every funtion can access global
// execution context

var a ="hello world"
function parent(){
    let b ="hello parent"
    child()
    function child(){
        let c = "hello child"
        external()
    }
}
function external(){
    let d= "i am external"
    console.log(`${a} ${b} ${c} ${d}`)
}
parent()