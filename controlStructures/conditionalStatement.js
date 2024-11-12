// control structure in js is essential for controlling the flow of execution in your code. It allows you to dictate how your programme should respond based on conditions.

// 1. conditional statement
// conditonal statement executes a block of code if the specified condition is true or false.

// a. IF statement
let temperature = 30;

if(temperature > 25){
    console.log("it is a hot day!")
}else {
    console.log("it is a cold day!")
}

const isAdmin = false;
const isSuperUser = false;

if (isAdmin || isSuperUser){
    console.log("you can have access to the app")
}else{
    console.log("you are not allowed to have access to the app")
}

// write an if statement that checks if someone has paid school fees and also have good health before the person can have access to the, else the person should go back home

// your output should be: welcome to the class or go back home

const schoolFees = true;
const goodHealth = true;

if( schoolFees && goodHealth){
    console.log("welcome to the class")
}else { 
    console.log("go back home")
}



// let age = 25;
// if (age > 25){
//     console.log("your age is above 25")
// } else if (age < 25){
//     console.log("your age is below 25")
// } else {
//     console.log("your age is 25")
// }


let fruit = "apple";
if (fruit === "banana"){
    console.log("we have banana in the store")
} else if (fruit === "orange"){
    console.log("we have orange in the store")
} else if (fruit === "coconut"){
    console.log("we have coconut in the store")
} else if (fruit === "apple"){
    console.log("we have apple in the store")
} else{
    console.log("we do not have any fruit in our store")
}

let fruit1 = "apple";

switch(fruit1) {
    case "banana":
        console.log("it is banana")
        break;
    case "apple":
        console.log("it is apple")
        break;
    default:
        console.log("we do not have any fruit")
}

let age = 25;
 switch (age){
    case age > 25:
        console.log("your age is above 25")
        break; 
    case age < 25:
        console.log("your age is below 25")
        break ;
     default:
        console.log("your age is 25")    
} 


/* assignment :*/  
const actions = ["start", "stop", "pause"];
let userAction = "start";
let isLoggedIn = true;
switch(true){
    case actions.includes(userAction) && isLoggedIn:
        console.log("Actions permitted:" + userAction);
        break;
    case actions.includes(userAction) && !isLoggedIn:
        console.log("please log in to perform this action");
        break;
    default:
        console.log("No valid case found.");     

}