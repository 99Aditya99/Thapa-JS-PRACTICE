// its almost same a inner function 
// but it will not be execute into outer function 
// rather it will be returned


function outerFnc(num1){
    let num2=10
    function innerFnc(){
            console.log(`multiplication is : ${num1*num2}`)
        }
    return innerFnc
}

outerFnc(30)()

let inner=outerFnc(30)
inner()