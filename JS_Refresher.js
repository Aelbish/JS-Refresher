//This document is a refresher for basics of JS

//This is an inline commment.

//Data types
//How to initialize a data
//the declarations are case sensitive
//these keywords hoist to the top of their scope

//var is function scoped or global scoped (if declared outside of a function), IT IS NOT BLOCK SCOPEDDD
//it is hoisted as undefined, value can be changed
//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
//var with the same name can be redeclared which can cause bugs
//NOTE:Since var can be redeclared with the same name again, it can introduce error, so we use let and const
var myName = "Aelbish";
myName = "Sam";
var myName = "Thomas";

//block {} scoped,
//let with the same name cannot be redeclared, but the value can be changed
//let is not initialized when it is hoisted, will get a reference error
let myName1 = "Tommy";

//const can never be changed
//similarites with let, so blocked scope
//will not be initialized
//it cannot be updated so it must have an assigned value when declaring
const myName2 = "Sammy";
//NOTE: when creating an object with const keyword the actual object cannot be redeclared, but its properties can be updated
//Hence if we actaully need to create a const object that cannot be changed we can use freeze method;
const obj1 = { name: "Sam", age: 51 };
Object.freeze(obj1);

console.log(myName);

//NOTE: we can declare a variable without the keyword const or let or var which will be available globally
function test() {
  hi = "HELLO";
}
test();
console.log(hi);
hi += "BYE";
console.log(hi);

//NUMBERS
//Shortcuts for arithmetic operations
let a = 3;
a--;
a++;
a += 2;
a -= 6;
a *= -5;
let name = "I am ";
name += "Aelbish";
console.log(a);
console.log(name);

//STRINGS
//Escaping characters
//Use backslash \
let escapeTest = "Hello\n\tI'am\n\\Aelbish";
console.log(escapeTest);
//Length of a string
let lenStr = "Aelbish".length;
console.log(lenStr);
//Get a character, returns a string.
console.log(typeof "Aelbish"[0]);
// == (less strict) or === (strict)

//ARRAYS
//NOTE:Strings are immutable so, I cannot update a single character of a string by accessing a character of a string
//But in arrays, we CAN
let arrCalc = [0, 1, 2];
arrCalc[0] = 3;
console.log(arrCalc);

//NOTE:Push and POP are for the last element on an array
//Add a member to the end
arrCalc.push(3);
console.log(arrCalc);
//Remove the last element
arrCalc.pop();
console.log(arrCalc);

//NOTE:Shift and unshift are for the first element on an array
//Remove from the beginning
arrCalc.shift();
console.log(arrCalc);
//Add at the first of the array
arrCalc.unshift(99);
console.log(arrCalc);
//Get index of an element, returns -1 if not found
console.log(arrCalc.indexOf(99));
//Remove an item based on index, splice takes two arguments, the first one is the starting positions and the second one is the number of elements to be removed
arrCalc.splice(0, 1);
console.log("SPLICE", arrCalc);
//SLICE function, takes startIndex and endIndex as two arguments from StartIndex and "to and not including EndIndex"
//NOTE: this does not edit the original array or string we are working on
const newSlice = arrCalc.slice(0, 1);
console.log("SLICE", newSlice);

//make a copy of an array, splice returns the element or an array
let arrCalcCopy = arrCalc.splice();
console.log(arrCalcCopy);

let advArr = [
  ["Aelbish", 23],
  ["Niren", 23],
];
let niren = advArr[1][0];
console.log(niren);

//ForEach for an array, forEach takes a function as an argument. That function has item, index, and array as arguments
let names = ["Aelbish", "Niren", "Krishna"];
names.forEach((item, index, array) => {
  console.log(item, index, array);
});

//SWITCH AND CASE
const caseInSwitch = (val) => {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    case 5:
    case 6:
    case 7:
      answer = "between 5 and 7";
      break;
    default:
      answer = "Other number than 1 to 7";
      break;
  }
  return answer;
};
console.log(caseInSwitch(5));

//OBJECTS
//Accessing object properties that have spaces
let newObj = {
  "a name": "Aelbish",
  "my side": "Orange Chicken",
};
const aName = newObj["a name"];
console.log(aName);
//We can add other properties to an object as shown below
newObj.name = "Aelbish";
console.log(newObj);
//We can also remove a property using the delete keyword
delete newObj.name;
console.log(newObj);
//Check if the object has a property
console.log(newObj.hasOwnProperty("a name"));

//LOOPS LOOPS LOOPS
//While loop
let arr = [];
let i = 0;
while (i < 5) {
  arr.push(i);
  i++;
}
console.log(arr);

//For loop
let forArr = [];
for (let i = 0; i < 5; i++) {
  forArr.unshift(i);
}
console.log(forArr);

const addArr = [1, 2, 3, 4, 5];
let total = 0;
for (let i = 0; i < addArr.length; i++) {
  total += addArr[i];
}
console.log(total);
total = 0;

//FOR EACH function for array
addArr.forEach((item, index, arr) => {
  total += item;
});
console.log(total);
total = 0;

//MAP function for array
//NOTE:map returns an array
//Map function takes an anonymous function as argument where we will place the logic
//Map does not change the original array we are workin on
addArr.map((item) => {
  total += item;
});
console.log("MAP", total);
total = 0;

//FILTER FUNCTION
//Filter function returns an array
//Filter function takes an anonymous function as argument where we will place the logic
//Filter does not change the original array we are working
const filteredArr = addArr.filter((item) => {
  //This must return a boolean at the end
  return item > 1;
});
console.log("FILTER", filteredArr);

//SOME FUNCTION, takes a function as an argument where we place the logic
//Check if an array consists of at least one element that satisfies the condition, similar to filter
console.log(
  "SOME",
  addArr.some((item) => {
    return item > 1;
  })
);

//EVERY FUNCTION, is just like SOME
console.log(
  "EVERY",
  addArr.every((item) => {
    return item > 0;
  })
);

//REDUCE FUNCTION
//Transforms an array into a single value, returns a single value
//the reduce function takes a reducer function as the first argument where we place the reducing logic, and a starting value as the second argument
//The reducer function takes two arguments, the first one is the accumulator and the second is to store the current value
const multiplicationVal = addArr.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  1
);
console.log("REDUCE", multiplicationVal);

//INCLUDES FUNCTION
//NOTE:This does not work for array of objects
console.log("INCLUDES", addArr.includes(7));

//REVERSE FUNCTION
//Changes the array we are working on
addArr.reverse();
console.log("REVERSE", addArr);

//FILL FUNCTION
//Fills all the values of the existing elements of an array with the argument we provide, we can also provide additional arguments
//We can provide a second argument as startIndex and the third argument as the endIndex
addArr.fill(0);
console.log("FILL", addArr);

//SORT FUNCTION
//Sort our array in ascending order based on their values
const randomMonth = [1, 5, 2, -1, 8];
randomMonth.sort();
console.log(randomMonth);

//USAGE OF MAP FUNCTION
const data = [{ name: "Aelbish", age: "15" }];
let result = "";
function lookupProfile(name, prop) {
  data.map((item) => {
    if (item.name === name) {
      result = item[prop] || "Property not found";
    } else {
      result = "User not found";
    }
  });
}

lookupProfile("a", "age");
console.log(result);

//RANDOM FUNCTION
const randomNum = Math.floor(Math.random() * 5);
console.log(randomNum);

//GENERATE RANDOM Number between two numbers (Math.random() * (maxNum - minNum + 1)) + minNum

const ranNum = Math.floor(Math.random() * (5 - 1 + 1) + 1);
console.log(ranNum);

//Parse integer from a string, if we pass a second argument it defines the radix
console.log(parseInt("8F", 16));

//Terenary operator
// Syntax: condition? "//if true" : "/if false"

//Setting a default value for an argument
const addOneByDefault = (a, b = 1) => a + b;
console.log(addOneByDefault(2));

//REST operator, rest operator will create an array from an array or any iterables
// The rest parameter allows us to pass an indefinite number of parameters to a function and access them in an array.
const usingRest = (...args) => {
  args.map((item) => console.log(item));
};
usingRest(1, 2, 4, 5, { name: "Aelbish" }, [1, 2, 3]);

//SPREAD OPERATOR
//The spread operator allows us to spread the values of arrays into a new array
//We can use the spread operator to create a copy of the array also, since if we do something like
// let arr1=[1, 2, 3], let arr2=arr1, and we change an element of arr1, then arr2 will also change since the reference the same memory
const ar1 = [1, 2, 3, 4];
const ar2 = [5, 6, 7];
const ar3 = [...ar1, ...ar2];
console.log(ar3);
//We can also use the spread operator to pass the arguments from an array to a function
const params = [1, 2, 3];
const summer = (a, b, c) => a + b + c;
console.log(summer(...params));

//DESTRUCTING ARRAY
const [n1, n2, n3, n4] = ["Aelbish", "Nick", "Rory", "Shane"];
console.log(n1, n2, n3, n4);
//Skipping elements while destructuring the array, each comma will represent an element that is to be skipped
const [nn1, , nn3] = ["Aelbish", "Nick", "Rory", "Shane"];
console.log(nn1, nn3);

//Object destructuring
const { name: nam1 = "jell", address: ad1 } = { address: "Louisiana" };
console.log(nam1, ad1);
//Nested object destructuring
const {
  title,
  location: { street: streetName },
} = { title: "Swagger", location: { street: "4217 Pelican Rd", state: "LA" } };
console.log(streetName);
