// conclusion 
// const value cant be changed
// its better to use let than var because of issue of block scope and functional scope

const fname="Mamoona"
let age=23
var city="Bwp"
education="Bscs"

console.log(fname)
console.log(age)
console.log(city)
console.log(education)

//now lets change there values to see what happens

// fname="ayesha"        -> doing this is not allowed
age=30
city="Multan"
education="Inter"

console.table([fname,age,city,education])