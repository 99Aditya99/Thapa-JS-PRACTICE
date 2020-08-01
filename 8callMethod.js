// we can use call() to call a function 
// of a object from another object 

// eg. 
const student1 ={
    name:"Ali Hasan",
    age:89,
    city: function (place){
        console.log(`name : ${this.name} and city : ${place}`)
    }
}
const student2 ={
    name:"Javed Miadad",
    age:56
}

student1.city("lahore")
student1.city.call(student2,"Dhaka")


