//JavaScript Revision
var firstName = "Prarthana";
var age = 22;
var hasHobbies=true;
// function summarizeUser(){
//     return `first name:${firstName}, age is:${age}, hobbies: ${hasHobbies}`;
// }
// //console.log(summarizeUser());
// //Anonymous function
// const summarizeUser=function(){
//     return `first name:${firstName}, age is:${age}, hobbies: ${hasHobbies}`;
// }
//Arrow functions
const summarizeUserArrow=(userName, userage,userHobbies)=>{
    return `first name:${firstName}, age is:${age}, hobbies: ${hasHobbies}`;
}
//console.log(summarizeUserArrow(firstName, age, hasHobbies));

// arrow function easy format
const add=(a,b)=>a+b;
//console.log(add(2,3));
// single argument,ommit the paranthesis
const addSingle=a=>a + 1;

//console.log(addSingle(5));
//no argument
const noArgument=()=>1;
//console.log(noArgument());

//Objects, properties methods
const person={
    Firstname:"Prarthana",
    age:22,
    collegeName:"Kle technological University",
    //   college:()=>{
    //     //console.log("College name is : "+ this.collegeName);->undefined
        
    //   },
    college:function(){
       // console.log( "College is " + this.collegeName);
    }
};
//console.log(person);
//person.college();

//Arrays
const hobbies=["Cooking","Playing Football"];// you can even change "Playing Football" to "Youtube" because hobbies will still be holding the address of the same reference and changing value does'nt matter. 
// for(let hobby of hobbies){
//     console.log(hobby);
// }

// //map
// console.log(hobbies.map(hobby=>"hobby: "+hobby));

// Arrays and objects are reference types
hobbies.push('Programming');
//console.log(hobbies);

// Rest and spread Operators
//lets say we want to implement the pattern where add a new hobby, we dont edit the original arrray but we create a new array with old values and new value.
// This is a common pattern called the immutability, where we never add existing values but we replace them with copies + the changes.

// To copy an array
//slice 
const copiedArray=hobbies.slice();
//console.log(copiedArray);
//Another way
const copiedarr=[hobbies]; // its an array within an array. The outer array has only one element.Exact same object not copy of it.
//console.log(copiedarr); 

// Spread Operators
//They take the array or the operator and pull out all the elements or properties and put it around whatever surrounding the spread operator.
const copiedSpread=[...hobbies];
//console.log(copiedSpread);

// Rest Operator
//So when you want to return the arguments that are passed to the function
//Example
const returnExample=(arg1, arg2, arg3)=>{
  return [arg1, arg2, arg3];
}
//console.log(returnExample(1,2,3));

//But when we are not sure about the number of arguments we want to pass then we use rest operator.
const restOp=(...args)=>{
  return args;
}
//console.log(1,2,3,4,5,5);

// Destructuring
// Say you have an object
const student={
    Fname:"Prarthana",
    age:22,
    Rollnumber:529,
    college: "KLE Technological University",
};
// const wdesExample=(studentData)=>{
//   //console.log(student.Fname);
// }
// wdesExample(student);

// using destructing
const printName=({Fname})=>{
    //console.log(Fname);
}
printName(student);
// Another way of destructuring 
const {Fname, college}=student;
//console.log(Fname,college);

const hobbyArr=["Piano","Netflix"];
const [hobby1, hobby2]=hobbyArr;
//console.log(hobby1, hobby2);

// async code and promises
//asynchronous -> two arguments, function and timer
setTimeout(()=>{
    console.log("Time out!!");
}, 2000)
//synchronous code : console.log("Hello");
