'use strict';
function yearOfBirth(age) {
  return 2019 - age;
}

function createGreeting(name, age) {
  return (`Hi, my name is ${name}. I am ${age} years old. I was born in ${yearOfBirth(age)}`);
}

const greeting1 = createGreeting('Aedan', 21);
console.log(greeting1);
