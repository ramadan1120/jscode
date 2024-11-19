/* Loops are used to execute a block of code repeatedly until specific conditions are met.*/

for (let i = 0; i < 12; i++) {
    console.log("hello from loop " + i);
};

const colors = ["red", "green", "blue", "yellow"]

for( let i = 0; i < colors.length; i++) {
    console.log("Color:", colors[i]);
}


const fruits = ["apple", "banana", "mango", "pineapple"]

for( let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}

const students = [
    {name: "John", grade: 85},
    {name: "Martins", grade: 92},
    {name: "Seyi", grade: 100}
]

for (let i = 0; i < students.length; i++) {
    console.log("Student:", students[i].name, "Grade:", students[i].grade);
}

const profile = [
    {Name: "Adam", age: 17, school: "New Horizon", course: "Web Developer"}
]

for (let i = 0; i < profile.length; i++) {
    console.log("My Name is " + profile[i].Name , "I attend " + profile[i].school , "and I'm a " + profile[i].course);
}



//while loop 
let i = 0;
while (i < 5){
    console.log("count is: " + i)
    i++
}


// assigment
/**class details like age,name,course,gender use for loop to display each details */

const classDetails = [
    {Name: "Olamide Hafeez", age: 32, course: " Frontend Web development", gender: "male", school : "New Horizon College"},
    {Name: "Ademola Folake", age: 24, course: " Backend Web development", gender: "female", school : "New Horizon College"},
    {Name: "Adarabioyo Jumoke", age: 32, course: " Frontend Web development", gender: "female", school : "New Horizon College"},
    {Name: "Asude Basit", age: 22, course: " Cyber Security", gender: "male", school : "New Horizon College"},
    {Name: "Onatoye Barakah", age: 15, course: " Frontend Web development", gender: "female", school : "New Horizon College"},
    {Name: "Abdurrahman Adam", age: 27, course: " Data Analysis", gender: "male", school : "New Horizon College"}

]
for (let i = 0; i < classDetails.length; i++ ) {
    console.log("My name is " + classDetails[i].Name + ". "  + "" + "I am " + classDetails[i].age + " years of age." + "  " + "I am a " + classDetails[i].gender + " student " +  "learning " + classDetails[i].course + " at " + classDetails[i].school);
}
