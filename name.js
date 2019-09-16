'use strict';
function yearOfBirth(age) {
    if (age < 0)
        throw new Error('Age cannot be negative!');

  return 2019 - age;
}

function createGreeting(name, age) {
  return (`Hi, my name is ${name}. I am ${age} years old. I was born in ${yearOfBirth(age)}`);
}

try {
    const greeting1 = createGreeting("Heesu", 25);
    console.log(greeting1);
} catch(e) {
    console.log(e);
}
