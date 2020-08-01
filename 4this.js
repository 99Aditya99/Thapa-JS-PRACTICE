// this keyword inside a regular function will always
// refer to the global object but 
// this keyword inside function inside a object will refer 
// the current object

// eg:1

// function globalObj(){
//     console.log("i am globalObj function")
//     console.log(this)
// }

// const student={
//     name:"Ali Baba",
//     add:function(){
//         console.log("i am add() inside student object")
//         console.log(this)
//         function innerFunc(){
//             console.log("i am inner function")
//             console.log(this)
//         }
//         innerFunc()
//     }
// }


// globalObj()
// student.name
// student.add()

// let arr1=[10,20,30,40]
// let arr2=arr1
// arr2[1]=60
// console.log(arr1)
// console.log(arr2)

// let arr1=[10,20,30,40]
// let arr2=[...arr1]
// arr2[1]=60
// console.log(arr1)
// console.log(arr2)

let arr1=[10,20,30,40]
let arr2 =[].concat(arr1)
arr2[1]=60
console.log(arr1)
console.log(arr2)