// 2 types of memory 
// ->Stack , ->Heap
// premitive datatypes use Stack
// reference datatypes use Heap

//Stack -> LIFO -> humain copy provide hoti hai actual value main changing ni hoti copy main hoti hai
let SubjectOne = "Biology"
let SubjectTwo =  SubjectOne
SubjectTwo="Computer"

console.log(SubjectOne)
console.log(SubjectTwo) // Subject One holds its actual value

//Heap -> reference point or location of data is provided to access
let PersonOne = {
    name : "Mamoona",
    email : "moona@gmail.com"
}
let PersonTwo=PersonOne 
    PersonTwo.email="mamoona@gmail.com"

console.log(PersonOne.email)
console.log(PersonTwo.email) 
//Value in both changes because we have not created copy but actually acces that data in memory using its location
