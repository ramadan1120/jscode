alert("hello jsclass");
console.log("welcome to my website")
// three keys to hold a data or information
// var
// let
// const

var name = "adam";
console.log(name);

let age = 53;
console.log(age);

const email = "adam@gmail.com";
console.log(email);

//  types of datatypes

// primitive datatype are datatypes which holds only one data
// examples are:

// strings
let name2 = "john";

// numbers are of two types:
let age2 = 25;   // integer
let myNumber = 0.93  // float

// Boolean
// true/false
let isMarried = false;
let isGudMan = true;

// undefined
let notAssigned;

// null
let isActive = null;

// NON-PRIMITIVE DATATYPE
//  it can hold more than a data or information

// examples are:
// Array : it's the only datatypes that make use of square bracket

let products = ["bag", "shoes", "cloth", "phone", "laptops"];
console.log(products[3]);

// Object: it makes use of curly brace
let user = {
    name: "martins",
    age: 20,
    email: "adam@gmail.com",
    isStudent: false

};
console.log(user);

const user2={
    id: 1,
    firstName: "John",
    lastName: "Doe",
    userName: "johndoe123",
    email: "johndoe@example.com",
    password: "securePassword123",
    phone: "+1234567890",
    address: {
        street: "123 Main St",
        city: "Lagos",
        state: "Lagos",
        postalCode: "100001",
        country: "Nigeria"
    },
    dateOfBirth: "1990-01-01",
    isActive: true,
    roles:["user", "admin"],
    lastLogin: "2024-10-14T10:30;002"
};

console.log(user2);

