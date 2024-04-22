const Male=["Ali","Ahmed","Adeel","Abdullah"]
const Female=["Ayesha","Shae Gill","Laiba","Gennifer"]

//concatinating array ->not recommended bcz it concatenate 2 arrays
console.log("concatinating array")
const AllGenders=Male.concat(Female)
console.log(AllGenders) //provide us a new array

// using spread ->mostly used for concatination
console.log("Using spread")
const Genders=[...Male,...Female]
console.log(Genders)

//What if we push one array to another array
console.log("Pushing array to another array")
Male.push(Female)
console.log(Male) //it changes male array
console.log(Male [4][1] .toUpperCase()) // returns SHAE Gill

//-> Dealing with array in array in array using flat 
console.log("Dealing with array in array using flat")
const complicatedArray=[1,2,[3,4,5],6,7,[8,[9,10]]]