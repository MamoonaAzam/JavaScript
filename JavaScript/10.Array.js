const myArray=[0,1,2,3,4,5,6]
console.log(myArray)


//slice and splice difference (imp)

//slice ->origional array main change ni krta bss humain value show krwata hai
console.log("Slice ",myArray.slice(1,3))
console.log("Array after slice: ",myArray)
//splice ->origional array sy splice ki oi value nikal deta hai 
console.log("Splice ",myArray.splice(1,3))
console.log("Array after splice: ", myArray)

// length ->array ki length kaya hai
console.log(myArray.length)

// include ->kaya array main given value hai?
console.log(myArray.includes(6))

// indexof ->kis index per wo value pari hai
console.log(myArray.indexOf(4))

// push ->end main value push hogi 
myArray.push(7)
myArray.push(8)
console.log(myArray)

//pop ->end vali value pop hogi
myArray.pop()
console.log(myArray)

