let stringvalue="Hi how are you!"
console.log(typeof stringvalue)

//2nd way of string declaration - good way
let stringvalue2= new String("Step by Step") //it will give object type
console.log(typeof stringvalue2)
console.log(stringvalue2.substring(0,4))
console.log(stringvalue2.slice(-12,7))

let fname="ali"
let lname="ahmed"

// concatination
let fullName=(fname + lname)
console.log(fullName)

//string interpolation 
console.log(`Your fIrst name is ${fname} Your last name is ${lname}`)

 //String functions:
 console.log(`Your fIrst name is ${fname.toUpperCase()} Your last name is ${lname}`)
 console.log(`Your fIrst name is ${fname.charAt(1)} Your last name is ${lname.charAt(2)}`)
 console.log(`Your fIrst name length is ${fname.length} Your last name length is ${lname.length}`)
 console.log(`Your fIrst name is ${fname.indexOf("ali")} Your last name is ${lname.indexOf("h")}`)

 //trim and replace
 let email="   example@gmail.com"
 console.log(email)
 console.log(email.trim())
 console.log(email.replace('example','mamona'))

 let randomvalue="Hi-How-are-U"
 console.log(randomvalue.split("-"))
 console.log(randomvalue.includes("How"))
 console.log(randomvalue.includes("how"))