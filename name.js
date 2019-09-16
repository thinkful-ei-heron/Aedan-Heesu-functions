'use strict';
function yearOfBirth(age) {
  if (typeof age !== "number")
    throw new TypeError();
  if (age < 0)
    throw new Error('Age cannot be negative!');
  return 2019 - age;
}

function createGreeting(name, age) {
  return (`Hi, my name is ${name}. I am ${age} years old. I was born in ${yearOfBirth(age)}`);
}

try {
  let name = 'Heesu';
  let age = "25";
  if (name !== undefined && age !== undefined){
    const greeting1 = createGreeting(name, age);
    console.log(greeting1);
  }else throw new Error('Arguments not valid');
} catch(e) {
  console.log(e);
}
