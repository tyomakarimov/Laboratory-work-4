'use strict';

console.log('Hello, World!');

alert('Hello, World!');

const input = prompt('Please, enter your name');

const confirmed = confirm('Do you know JavaScript?');

// variables

let first = 2;
first = 7;
first = 'A';

const second = 'Constant string';

{
  var third = true;
}

console.log('third', third);

// data types

const number = 17;
const string = 'JavaScript';
const boolean = true;
const UNDEFINED = undefined;
const NULL = null;

const array = [200, 'ES6', false, [1, 2, 3], { university: 'KPI'}];

const object = {
  name: 'Artem',
  age: 18,
  isStudent: true,
};

console.log("17 + 1 =", 17 + 1);
console.log("'17' + 1 =", '17' + 1);
console.log("'17' - 1 =", '17' - 1);
console.log("'17' * 2 =", '17' * 2);
console.log('true + 3 =', true + 3);
console.log("false + '23' =", false + '23');
console.log("'A' + 'B' =", 'A' + 'B');
console.log("'17' == 17 =>", '17' == 17);
console.log("'17' === 17 =>", '17' === 17);

// methods of primitive types

  // number

const number2 = 17.1717171717;

console.log('number2.toFixed(2) =', number2.toFixed(2));

const stringFromNumber = number2.toString();

  // string

const string2 = 'Laboratory work';

console.log('string2.length =>', string2.length);
console.log('string.toLowerCase() =>', string2.toLowerCase());
console.log('string.toUpperCase() =>', string2.toUpperCase());
console.log("string2.includes(' ') =>", string2.includes(' '));
console.log("string2.toUpperCase('q') =>", string2.toUpperCase('q'));
console.log("string2.indexOf('o') =>", string2.indexOf('o'));
console.log("string2.indexOf('n') =>", string2.indexOf('n'));
console.log("string2.split(' ') =>", string2.split(' '));
console.log("string2.split('') =>", string2.split(''));

// methods of non-primitive types

const array2 = ['A', 'FICT', 300, false, 19];

console.log('array2 =>', array2);
array2.pop();
console.log('array2.pop() =>', array2);
array2.shift();
console.log('array2.shift() =>', array2);
array2.push([5, '']);
console.log("array2.push([5, '']) =>", array2);
array2.unshift({ age: 19 });
console.log("array2.unshift([5, '']) =>", array2);
console.log('array2.slice(1, 3) =>', array2.slice(1, 3));
array2.splice(2, 1);
console.log('array2.splice(2, 1) =>', array2);
console.log('array2.indexOf(false) =>', array2.indexOf(false));
console.log('array2.indexOf(true) =>', array2.indexOf(true));

const array3 = [12, 'true', false];

console.log('array2.join() =>', array3.join());
console.log("array2.join(' ') =>", array3.join(' '));
console.log("array2.join('Q') =>", array3.join('Q'));

const object2 = {
  name: 'Artem',
  age: 19,
  isStudent: true,
  favouriteLanguages: ['JavaScript', 'TypeScript', 'C++'],
  showAge() {
    return this.age;
  },
};

console.log('object2.favouriteLanguages =>', object2.favouriteLanguages);
console.log('object2.showAge() =>', object2.showAge());
console.log(Object.keys(object2));

// цикли

const firstLoop = () => {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
};

const secondLoop = () => {
  let i = 3;
  while (i > 0) {
    console.log(i);
    i--;
  }
};

const thirdLoop = () => {
  let i = 20;
  do {
    console.log(i + 100);
    i++
  } while (i < 24);
};

const fourthLoop = () => {
  for (const value of array) {
    console.log(value);
  }
};

const fifthLoop = () => {
  for (const key in object) {
    console.log(object[key]);
  }
};

const sixthLoop = () => {
  for (const [key, value] of Object.entries(object)) {
    console.log(key, ':', value);
  }
};

// JSON

const object3 = { name: 'Artem' };

const object4 = { name: 'Artem' };

const stringified = JSON.stringify(object3);

console.log('JSON.stringify(object3)', stringified);

const parsed = JSON.parse(stringified);

console.log('JSON.parse(stringified)', parsed);

console.log('object3 == object4 =>', object3 == object4);
console.log('object3 === object4 =>', object3 === object4);
console.log('JSON.stringify(object3) === JSON.stringify(object4) =>', JSON.stringify(object3) === JSON.stringify(object4));

// functions

firstFunction();

function firstFunction() {
  console.log('Function Declaration');
};

const secondFunction = function() {
  console.log('Function Expression');
};

const thirdFunction = () => {
  console.log('Arrow Function 1');
};

const fourthFunction = () => console.log('Arrow Function 2');

// function parameters

function sum1(a, b) {
  return a + b;
};

const sum2 = function(a, b) {
  return a + b;
};

const inc = a => ++a;

const multiplication1 = (a, b) => a * b;

const multiplication2 = (a, b, c) => {
  console.log(`Multiplying ${a}, ${b} and ${c}...`);
  return a * b * c;
};

const createArray = (a, b = 9) => [a, b];

function createObject(key, value = 'value') {
  const object = {};
  object[key] = value;
  return object;
};

// anonymous functions

const array5 = [1, 2, 3, 4, 5];

console.log('array5', array5);

const array6 = array5.map(value => value * 2);

console.log('array5.map(value => value * 2) =>', array6);

const callFunction = (func, a, b) => {
  const returnedValue = func(a, b);
  return returnedValue;
};

console.log('callFunction((a, b) => a + b, 5, 12) ->', callFunction((a, b) => a + b, 5, 12));

// pointers

const division = function(a, b) {
  return a / b;
};

const alsoDivision = division;

console.log('division =>', division(5, 10));
console.log('alsoDivision =>', alsoDivision(5, 10));

// ES6

class Person {
  constructor(name, age, town) {
    this.name = name;
    this.age = age;
    this.town = town;
  }

  showName() {
    return this.name;
  }
}

const person = new Person('Artem', 19, 'Bila Tserkva');

console.log('person =>', person);
console.log('person.town =>', person.town);
console.log('person.showName() =>', person.showName());

const maxArrayElement = array => {
  return Math.max(...array);
};

console.log(' maxArrayElement([54, 667, 332, 987, 234, 11]) =>',  maxArrayElement([54, 667, 332, 987, 234, 11]));

// closures

function sum3(a) {
  return function(b) {
    return a + b;
  }
};

const func = sum3(3);

console.log('func(6)', func(6));
console.log('sum3(3)(6)', sum3(3)(6));

const double = () => {
  const value1 = 5;
  let value2 = 7;
  return function() {
    return [value1 * 2, value2 += 5];
  };
};

const doubleValues = double();

console.log('doucleValues() =>', doubleValues());

const division2 = x => y => {
  return x / y;
};

console.log('division2(24)(6) =>', division2(24)(6));

// Module

const Module = (function() {
  const message = 'This is Module!!!';
  function showMessage() {
    console.log(message);
  }
  return {
    outputMessage() {
      showMessage();
    } 
  }
})();

Module.outputMessage();
// Module.showMessage();

// event listener

const div = document.getElementById('div');

const addListener = element => {
  element.addEventListener('click', () => {
    element.style.backgroundColor = 'green';
    element.style.textAlign = 'center';
  });
};

addListener(div);