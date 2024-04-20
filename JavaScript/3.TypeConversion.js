// conclusion
//"33" = 33 easily
//"33abc" = NAN
//"Null" = 0
//"Undefined" = NaN

let value1=20
let value2="20"
console.log(typeof value1);
console.log(typeof value2);

//Converting string value to number

let convetredValue1= Number(value2)
console.log(typeof convetredValue1); 

//value=30mamoona so how it can be converted
let value3="30mamaoona"
let convetredValue2 = Number(value3)
console.log(typeof convetredValue2);
console.log(convetredValue2)
//its giving NaN which says its not a number


let score=null
console.log(typeof score)
//lets convert it into number
let convertedScore=Number(score)
console.log(typeof convertedScore)
console.log(convertedScore)

//convering into boolean
let number=1
let booleanvalue=Boolean(number)
console.log(booleanvalue)
//cocnlusion in boolen 
//True =1
//False =0
// ""= false
// "mamoona" = true