// 1️⃣ Variables & strings

const name = "Shakirah";
const time = "morning";

console.log(`Good ${time}, ${name}`);

// 2️⃣ Functions

function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("Shakirah"));

function sit(name) {
    return `down ${name}`;
}

// Call the function and log the result
console.log(sit("Oluwadarasimi"));
function sitdown(name) {
    return `sitdown ${name}`;
}

// Call the function and log the result
console.log(sitdown("Oluwadarasimi"));



// Arrow function version
const greetArrow = (name) => `Hi ${name}!`;
console.log(greetArrow("Shakirah"));

