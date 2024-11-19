/* function: this is a block of code that performs an action and is reuseable */

// types of functions
// function declaration
// function expression
// arrow function

// 1. function declaration.
  function add(a, b){
     return(a+b)
  }
  const sum = add(2,4);
  console.log(sum);
  
  function multiply(x, y){
     return(x*y)
  }
  const Mply = multiply(4,5);
  console.log(Mply); 
  

function greet(name){
    console.log(`Hello ${name} Welcome to our app`)
}
greet ("Adam");
greet ("eve");
greet ("gideon");

const hisName = "martins";
console.log(`hello ${hisName}`);


function advice(name, course){
    console.log(`Hi ${name}, being ${course} is not easy, you have to be fully determined`)
}
advice ("Adam", "Web Developer");


// function expression

const add2 = function(a,b){
    return a+b
}
const sum2 = add2(1,2);
console.log(sum2);


const info = function(name1,course2,school){
  console.log(`hello ${name1}, it is better to learn ${course2} at ${school}`)
}
info('majasola','cyber security','New Horizon');


// write two examples of arrow functions 