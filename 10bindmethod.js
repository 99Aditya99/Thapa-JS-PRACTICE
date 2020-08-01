//bind() method can take an object as a parameter

// ex.

const student1={
    name:"Ali Jafar",
    age:89,
    city:"Mumbai",
    info:function(){
        console.log(`name: ${this.name} city: ${this.city}`)
    }
}
const student2={
    name:"Rahim Hasan",
    age:56,
    city:"Kolkata"
}


let stu2_info=student1.info.bind(student2)
stu2_info()