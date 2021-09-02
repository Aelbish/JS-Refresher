//This document is a refresher for basics of JS

//This is an inline commment.

//let and const is block scoped, not initialized.
//var is function scoped or global scoped, hoisted as undefined.

//In JS there are three types of scopes:
//1. Global scope
//2. Function scope
//3. Block scope: let and const

//SCOPE CHAIN IN JS
//If the javascript engine does not find the variable in local scope, it tries to check for the variable in the outer scope.
//If the variable does not exist in the outer scope, it tries to find the variable in the global scope.
//If the variable is not found in the global space as well, reference error is thrown.

//CLOSURE IN JS
//Closure is the ability of a function to remember the values of the variables that are declared in the outer scope.
var Pperson = function (n) {
  var nname = n;
  this.getName = function () {
    return nname;
  };
};

var p1 = new Pperson("Aeloj");
console.log("Closure", p1.getName());

//PROTOYPES IN JS
//There is also Object.prototype which is at the top of the chain, and every prototype inherits properties and methods from the Object.prototype.
//All objects in JS inherit properties from a prototype.
//A prototype is the blueprint of an object. Prototype allows us to use properties and methods of an object (default methods), even if they donot exist for a current object.
//Array object inherits properties from the Array prototype.

//CALLBACK FUNCTION
//Callback functions are functions that are executed inside another function.

//MEMOIZATION (Storing cached values if a function is running multiple times with the same parameter)
//Instead of computing for a same value again and again we create a cache object where we store the computed value and access it
//Although memoization saves times, it consumes a lot of memory since we are storing a lot of cached values.
function memoizedAdd1() {
  var cache = {};
  return function (aNum) {
    if (aNum in cache) {
      console.log("Cached value");
      return cache[aNum];
    } else {
      cache[aNum] = aNum + 1;
      console.log("Computed");
      return cache[aNum];
    }
  };
}

var memoizedFunc = memoizedAdd1();

memoizedFunc(1);
memoizedFunc(1);
memoizedFunc(2);
memoizedFunc(2);

//Using recursion to find sum of an array
function findSumOfArray(anArray) {
  if (anArray.length === 1) {
    return anArray[0];
  } else {
    return anArray.pop() + findSumOfArray(anArray);
  }
}

console.log("Recursion", findSumOfArray([1, 2, 3]));

//JS is loosely typed language. It is dynamically typed language i.e. the type of a variable is checked during runtume
//instead of compile time. A variable can hold any type of data.

//In JS primitive data types are passed by value and non-primitive data types are passed by reference
//For understanding passed by value and passed by reference, we need to understand what happens when we create a variable and assign a value to it,

//var x = 2;

//In the above example, we created a variable x and assigned it a value “2”. In the background, the “=” (assign operator) allocates some space in the memory,
//stores the value “2” and returns the location of the allocated memory space.
//Therefore, the variable x in the above code points to the location of the memory space instead of pointing to the value 2 directly.
//Assign operator behaves differently when dealing with primitive and non primitive data types,
//Assign operator dealing with primitive types:

//var y = 234;
// var z = y;

// In the above example, assign operator knows that the value assigned to y is a primitive type (number type in this case),
// so when the second line code executes, where the value of y is assigned to z, the assign operator takes the value of y (234) and
// allocates a new space in the memory and returns the address. Therefore, variable z is not pointing to the location of variable y, instead it is pointing to a new location in the memory.

// var y = #8454; // y pointing to address of the value 234
// var z = y;
// var z = #5411; // z pointing to a completely new address of the value 234

// Changing the value of y

// y = 23;
// console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z

// From the above example, we can see that primitive data types when passed to another variable, are passed by value.
// Instead of just assigning the same address to another variable, the value is passed and new space of memory is created.
// Assign operator dealing with non-primitive types:

// var obj = { name: "Vivek", surname: "Bisht" };
// var obj2 = obj;

// In the above example, the assign operator, directly passes the location of the variable obj to the variable obj2.
// In other words, the reference of the variable obj is passed to the variable obj2.

// var obj = #8711;  // obj pointing to address of { name: "Vivek", surname: "Bisht" }
// var obj2 = obj;
// var obj2 = #8711; // obj2 pointing to the same address

// changing the value of obj1

// obj1.name = "Akki";
//console.log(obj2);

// Returns {name:"Akki", surname:"Bisht"} since both the variables are pointing to the same address.

// From the above example, we can see that while passing non-primitive data types, the assign operator directly passes the address (reference).
// Therefore, non-primitive data types are always passed by reference.

//IIFE (Immediately Invoked Function Expression)
//Syntax
//(function () {//Do something} ())
//We enlose the function with brackets because JS will throw an error since the function doesnot have a name
//Since it needs to be invoked immediately we also call it by adding ()

//Higher order function
//Functions that operate on other function by taking it as argument or returning it
//Higher order functions are a result of functions being first class citizens in JS
//In javascript, functions are treated as first-class citizens, they can be used as an argument of another function,
//can be returned by another function and can be used as a property of an object.
//Examples
// function higherOrder(fn) {
//   fn();
// }

// higherOrder(function () {
//   console.log("hello");
// });

// function higherOrder2() {
//   return function () {
//     return "Do something";
//   };
// }

//This keyword
//This will always refer to the object that is invoking the function
//The silly way to understanding the this keyword is, whenever the function is invoked, check the object before the dot .
//The value of this . keyword will always be the object before the dot .
//If there is no object before the dot, the value of this keyword will be the global object.

//Data types
//How to initialize a data
//the declarations are case sensitive
//these keywords hoist to the top of their scope
//Primitive and non-primitive data types
//Primitive data types: Number, String, null, undefined, bigint, symbol
//Non-primitive data types:Objects, Array
//NOTE: It is important to remember that any data type that is not primitive data type, is of Object type in javascript.

//var is function scoped or global scoped (if declared outside of a function), IT IS NOT BLOCK SCOPEDDD
//variables declared in global scope with var keyword is also added to the window/global object
//so if we do window.variable1 it will give the value, but not in the case on const or let
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

//IMPLICIT TYPE COERCION
//Automatic conversion of a value from one data type to another
//NOTE:ype coercion also takes place when using the ‘ - ‘ operator,
//but the difference while using ‘ - ‘ operator is that, a string is
//converted to a number and then subtraction takes place.
//Equality coercion: When we check with == then the types are converted

//TRUTHY AND FALSY
//Truthy values are those which will be converted (coerced) to true .
//Falsy values are those which will be converted to false .
//All values except 0, 0n, -0, “”, null, undefined and NaN are truthy values.
//Logical operators
//For &&: if both values are truthy returns the second value, if first value is falsy the first value is returned
//if second value is falsy seond value is returned
//For ||: if first value is truthy, then the first value is returned else always second value is returned

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
//make a copy of an array, slice returns the element or an array
let arrCalcCopy = arrCalc.slice();
console.log(arrCalcCopy);
console.log(arrCalc);

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
//Cloning an object
//NOTE:Cloning this way will do a shallow copy not a deep copy i.e. if the object we are trying to clone has nested object then the nested object's reference will be copied instead of creating a new memory
//of that nested object. Hence, if we change the original object's nested object after cloning it, the cloned object's nested object will also be changed.
var cloneeObj = { a: 1, b: 1 };
var clonedObj = Object.assign({}, cloneeObj);
console.log("CLONED: ", clonedObj);

//CALL method
//Call method invokes allows an object to use another object's function.
//We define the object which should be used for the function.
var person = {
  age: 23,
  getAge: function () {
    return this.age;
  },
};

var person2 = { age: 54 };
console.log("HELLO", person.getAge.call(person2));
//call also accepts arguments
function dooo(message) {
  return this.name + message;
}
const pers = { name: "John" };
console.log("CALL DEMO", dooo.call(pers, "hello"));

//APPLY method
//The only difference between call and apply is that apply method takes the arguments as an array.
console.log("APPLY DEMO", dooo.apply(pers, ["bye"]));

//BIND method
//Bind function returns a function by binding another object's function with the given object as argument
//This is just like call function but this also returns the function.
var bikeDetails = {
  displayDetails: function (registrationNumber, brandName) {
    return (
      this.name +
      " , " +
      "bike details: " +
      registrationNumber +
      " , " +
      brandName
    );
  },
};

var person11 = { name: "Vivek" };

var detailsOfPerson1 = bikeDetails.displayDetails.bind(
  person11,
  "TS0122",
  "Bullet"
);

// Binds the displayDetails function to the person1 object

console.log("BIND", detailsOfPerson1());

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
//Rest pranater should always be used as the last parameter of a function
const usingRest = (...args) => {
  args.map((item) => console.log(item));
};
usingRest(1, 2, 4, 5, { name: "Aelbish" }, [1, 2, 3]);

//SPREAD OPERATOR
//The spread operator allows us to spread the values of arrays or object into a new array or object
//We can use the spread operator to create a copy of the array also, since if we do something like
// let arr1=[1, 2, 3], let arr2=arr1, and we change an element of arr1, then arr2 will also change since the reference the same memory
const ar1 = [1, 2, 3, 4];
const ar2 = [5, 6, 7];
const ar3 = [...ar1, ...ar2];
console.log(ar3);
//We can also use the spread operator to pass the arguments from an array to a function (when one or more arguments is expected)
const params = [1, 2, 3];
const summer = (a, b, c) => a + b + c;
console.log(summer(...params));

//DESTRUCTING ARRAY
const [n1, n2, n3, n4] = ["Aelbish", "Nick", "Rory", "Shane"];
console.log(n1, n2, n3, n4);
//Skipping elements while destructuring the array, each empty comma will represent an element that is to be skipped
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

//SPREAD OPERATOR with destructing array
const [, , ...removeFirstAndSecondFromArr] = [1, 2, 3, 4, 5];
console.log(removeFirstAndSecondFromArr);

//We can destructure before while the object while passing it as argument
const argObj = { namer: "Aelbish", gender: "male" };
const raaa = ({ namer, gender }) => {
  console.log(namer + gender);
};
raaa(argObj);

//Construct a class and object
//Class keyword introduced in ES6
//Classes are not hoisted unlike function hence, we cannot use a class before declaring the class
//Class can inherit properties and methods of another class by using the extend keyword
class Person {
  constructor(age) {
    //underscore means should be private
    this._age = age;
  }
  //getter
  get ageOfPerson() {
    return this._age;
  }
  //setter
  set ageOfPerson(newAge) {
    this._age = newAge;
  }
}

const person1 = new Person(55);
console.log(person1.ageOfPerson);
person1.ageOfPerson = 65;
console.log(person1);

class Vegetable {
  constructor(name111, color) {
    this._name = name111;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}
const veg1 = new Vegetable("pumpkin");
console.log(veg1);
console.log(veg1.name);

//Constructor function
//Pascal notation
function Fruit(name, color) {
  this.name = name;
  this.color = color;
}
//Adding a method to the constructor is tedious, in ES6 we can define a class inside which we define a constructor, after that we directly add methods inside the class
Fruit.prototype.getName = function () {
  return this.name;
};

var fruit1 = new Fruit("Apple", "Red");
var fruit2 = new Fruit("Banana", "Yellow");
console.log("Constructor function", fruit1.getName());

//import * as objectName from "path"
//if we want to export multiple functions from a file, we do export const func1 = () => {}
// to import from this we do import {func1, func2} from "path"
//if we want to export one thing from a file, we do const func1 = () => {}; export default func1;
//to import from this we do import func1 from "path"

//HOISTING IN JS
//Hoisting is the default behavior of JS to move all the declarations at the top of the scope
//Note: Variable initializations are not hoisted, only variable declarations are hoisted.
//before code execution.
//JS only hoists declartions not initializations.
//JS allocations memory for all variables and functions defined in the program before execution.
//Assigning a value to an UNDECLARED variable makes it a global variable.
//UNDECLARED VARIABLE is assigned the value of undefined
const undeclared = () => {
  xx = 5;
  let b = 5;
};
undeclared();
console.log(xx, "The value of xx is printed because it is global");
//Reference error occurs when we try to access an undeclared variable
//Variables declared with let and const remain uninitialised at the beginning of execution
//whilst variables declared with var are initialised with a value of undefined.
//Function declartions are hoisted to the top, function expressions are not hoisted.
hoisted();
function hoisted() {
  console.log(
    "Function declartions are hoisted, so we can call this function before defining this function"
  );
}

//functionExpression();
const functionExpression = () => {
  console.log(
    "Function expressions are not hoisted, so we cannot execute this function before defining it."
  );
};

//Precedence of variable declaration, variable assignment, and function declartions
//Variable assignment takes precedence over function declarations
//Function declarations take precedence over variable declarations

var double = 11;
function double() {
  return 5;
}
console.log(
  typeof double,
  "This should be a number because of precedence rule"
);

var double1;
function double1() {
  return 5;
}
console.log(
  typeof double1,
  "This should be a function because of the precedence rule"
);

//Check if a given string is palindrome
function isPalindrome(str) {
  const newStr = str.replace(/[\W]/g, "").toLowerCase();
  return str == newStr.split("").reverse().join("");
}
console.log(isPalindrome("aelbibleaa"));

//Sum of two numbers
function sumOfNum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function (y) {
      return x + y;
    };
  }
}
console.log(sumOfNum(2)(3));

var d = {};
["zebra", "horse"].forEach(function (k) {
  d[k] = undefined;
});
console.log(d);

var arrr1 = "john".split("");
//NOTE:reverse will reverse the original array we and also return a reference of the original array
//Hence, if we change arr2, arrr1 will also be changed because reverse returns a REFERENCE not a COPY
var arr2 = arrr1.reverse();
var arr3 = "jones".split("");
//when we push arr3 it will be pushed as a single array element at the end of arr2
arr2.push(arr3);
//slice(-1) returns the last element
console.log("array 1: length=" + arrr1.length + " last=" + arrr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);

//Closure
//A closure if an inner function which is enclosed by an outer function. The closure will have access to variables in its scope, global variables, and variables in the enclosing function scope

//setTimeout
for (var ii = 0; ii < 5; ii++) {
  (function (xxz) {
    setTimeout(function () {
      console.log(xxz);
    }, xxz * 1000);
  })(ii);
}

var az = {},
  b = { key: "b" },
  c = { key: "c" };

az[b] = 123;
az[c] = 456;

console.log(az[b]);

console.log(
  (function factorial(num) {
    return num > 1 ? num * factorial(num - 1) : num;
  })(10)
);

//DOM
//DOM stands for Document Object Model.
//It is a programming interface for HTML and XML.
//When a browsers renders an HTML document it creates an object based on the HTML document which is called DOM.
//We can utilized this object to manipulate or change various elements inside the HTML document.

//Arrow functions
//Introduced in ES6, return keyword and curly not needed if only 1 statement or expression
//The most important difference between the traditional function declaration and arrow function is the this keyword.

var oobj1 = {
  getThis: function () {
    return this;
  },
};

var oobj2 = {
  getThis: () => {
    return this;
  },
};

console.log("Traditional function this", oobj1.getThis());
console.log("Arrow function this", oobj2.getThis());
console.log("Arrow function this with bind", oobj2.getThis.bind(oobj2));
//Here this of traditional function will refer to the object that is calling the function
//However this of arrow function will inherit its value from the parent scope which is the window object

//Promises in JS
//Promises are used to handle asynchronous operations in JS like server request. Before we used to have callbacks.
//Promises have four states:
//1. Pending: Initial state of a promise, promise has not been fulfilled or rejected.
//2.Fulfilled: Async operation is complete and successful.
//3.Rejected: Async operation has failed
//4. Settled: Final state of a promise, promise has been either fulfilled or rejected.

//Promise can be created using the promise constructor which takes a callback function with two parameters resolve and reject
function sumOfThreeElements(...argu) {
  return new Promise((resolve, reject) => {
    if (argu.length > 3) {
      reject("Only three elements allowed");
    } else {
      const sum = argu.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      resolve("Sum successfully computed " + sum);
    }
  });
}

//Promises can by consumed by .then or .catch

sumOfThreeElements(1, 2, 3)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });

//Generators in JS
//Generators were introduced in ES6. I find generators like breakpoints.
//generator functions are created using the syntax: function* functionName(){}
//We can add yield keyword inside the generator function to stop the execution of the function midway.
//NOTE:generator functions return a generator object
function* looping() {
  let count = 0;
  for (let i = 0; i < 3; i++) {
    count++;
    yield i;
  }
  return count;
}

let iterator = looping();

console.log("LOOPING", iterator.next());
console.log("LOOPING", iterator.next());
console.log("LOOPING", iterator.next());
