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
const flatArray=[complicatedArray.flat(Infinity)] //Infinity->hur level tkk means jitny marzi complication ho onhain end krdo agr hum level dy gain tw wo osi level tkk work kry ga
console.log(flatArray)
const flatArray2=[complicatedArray.flat(1)] //solve only 1 level of inside array
console.log(flatArray2)
