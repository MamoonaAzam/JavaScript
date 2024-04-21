// dont create number with new keyword as they make object data type 
//The new keyword complicates the code and slows down execution speed.
//Comparing two JavaScript objects always returns false.
//Number Objects can produce unexpected results:

let x=new Number(10)
let y=new Number(10)
console.log(x==y)
console.log(x===y)

let a=100.344
let b=100.344
console.log(a==b)
console.log(a===b)

let z =(a.toPrecision(4)) //return string value
console.log(typeof z)
console.log(a.toPrecision(4))
console.log(a.toFixed(2))

