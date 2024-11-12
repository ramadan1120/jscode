// operators in js are special symbols that performs on one or more files in our js file system
// 1. Arrithmetic operations
// addition
let sum = 5 + 3;
console.log(sum);

// subtractions
let difference = 10 - sum;
console.log(difference);

// multiplications
let product = sum * difference;
console.log(product);

// division
let quotient = product / 4;
console.log(quotient);

// modulus
let remainder = quotient % 3;
console.log(remainder);

// addition assignment
let y = 5;
y += 1;
console.log(y);

// subtraction assignment
let z = 10;
z -= y;
console.log(z);

// 3. COMPARISON OPERATORS
// these operators compare values and return a boolean value

// Equal
console.log(5 == "5");

// strict equal
console.log(5 === "5"); 

// NOT equal
console.log(5 != "5"); 

// strict not equal
console.log(5 !== "5"); 
let u = "adam";
let c = 10;
console.log(u !== c);

// GREATER THAN
console.log(10 > 5);
let g = 12
let k = 10
console.log(k > g);

// LESS THAN
console.log(3 > 2);
let l = 12;
let i = 10;
let w = l - i;
console.log(k < w);

// greater than and equal
console.log(4 >= 5);
let d = 6;
let f = 6;
console.log(d >=f);

let o = d - 3;

console.log(d >= o);


// LOGICAL OPERATORS

// && AND operator 
const hasDriverLicenses = true;
const  hasInsurance = true;
const canDrive = hasDriverLicenses && hasInsurance;
console.log(canDrive);

const isAdult = true;
const  isChild = false;
const canEnter = isAdult && isChild;
console.log(canEnter);


// || OR operator 
const knowsHTML =  false;
const knowCSS = true;
const canDesignWebsite = knowsHTML || knowCSS;
console.log(canDesignWebsite); 

const isAdmin = false;
const isSuperUser = false;
const canAccessPage = isAdmin || isSuperUser;
console.log(canAccessPage);

