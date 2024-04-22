const Male=["Ali","Ahmed","Adeel","Abdullah"]
const Female=["Ayesha","Shae Gill","Laiba","Gennifer"]

//concatinating array ->not recommended bcz it concatenate 2 arrays
const AllGenders=Male.concat(Female)
console.log(AllGenders) //provide us a new array

// using spread ->mostly used for concatination
const Genders=[...Male,...Female]
console.log(Genders)

//What if we push one array to another array
Male.push(Female)
console.log(Male) //it changes male array
console.log(Male [4][1] .toUpperCase()) // returns SHAE Gill