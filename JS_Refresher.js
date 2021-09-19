//This document is a refresher for basics of JS

//ECMA Script are like rules and guideline while Javascript is a scripting language used for web development.

//JS is Object-Oriented Programming language

//Netscape is the software company who developed JavaScript.

//This is an inline commment, single line comment

/* This 
is
a
multi-line comment */

//let and const is block scoped, not initialized.
//var is function scoped or global scoped, hoisted as undefined.

//Default parameter values
function defPara(a = 0, b = 1) {
  return a + b;
}

console.log("Trying default parameter", defPara());

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
//Usage, the use of IIFE is to not pollute our global object, if the function is not used again, and only executed once why not just make it just executable
//instead of being able to call the function again. When we create IIFE we cannot call that function again since we are not hoisting or storing the function
//rather just executing it

//Higher order function
//Example map, filter, reduce
//Functions that accepts or returns another function is called higher-order function
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

//Undefined vs Null
//Both undefined and null are falsy values
//Undefined is the default value of a variable that has not been assigned a value or function that has no explicit return or property that does not exist in an object
//Null is a value that has been explicitly defined to a variable.
//Null means the variable is empty
//When comparing null and undefined we get true when using == and false when using ===.
//Null is like empty roller in the toilet for toilet paper wherease undefined is like there is no roller in the toilet for toilet paper.
//Null can be assigned to a variable.
//Trying to access an object's property that does not exist gives undefined wherease trying to access an empty property of an object gives null.

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

//variable typing
//variable typing is used to assign a number to a variable then assign string to the same variable.

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
//Object.seal - we can change those existing properties, but we cannot add new properties

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
//For example in React {isLoggedIn && <h1>You are logged in</h1>}
//In the above example, if both are truthy so the h1 element is rendered, and if isLoggedIn is false then the h1 element is not rendered.
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

//CHECKS
//NaNCHECK
//Number.isNaN();
//OR custom check by value !== value

//ARRAYCHECK
//Array.isArray([1, 2, 3])

//NumberisEvenCHECK
function isEven(num) {
  //BITWISE OPERATION & treats the numbers as binary values
  if (num & 1) {
    return false;
  } else {
    return true;
  }
}

//OBJECTPROPERTYCHECK
//first way: console.log("property" in objectName)
//second way: console.log(objectName.hasProperty("property"))
//third way: console.log(objectName["property"]), if the property does not exist then it will be undefined
//Note: the difference between using in and .hasProperty() is that in checks the objects' prototype chain i.e. methods like toString() will return true
//whereas hasProperty will only check the user-defined properties

//ASYNCOPERATIONCHECK
//Promises, async/await, callbacks

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
//Changes the original array
arrCalc.splice(0, 1);
console.log("SPLICE", arrCalc);

//SLICE function, takes startIndex and endIndex as two arguments from StartIndex and "to and not including EndIndex"
//Does not change the original array
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
//Create generic object
//var i = new Object()
//Three ways to create an object
//Using the regular assignment {}, using the .create() or creating a class and instantiating an object
//Creating an object without the prototype
//We can create the object without the prototype by using Object.create method
//The create method takes takes prototype as the first parameter
const oob = Object.create(null);
//The below code would throw an er
//console.log(oob.toString());

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
//Spread operator also does a shallow copy
var anotherShallowClonedObj = { ...cloneeObj };
console.log("CLONED: ", clonedObj);
//For a deep copy
var deepCopyClonedObj = JSON.parse(JSON.stringify(cloneeObj));

//CALL method
//Call method invokes allows an object to use another object's function.
//We define the object which should be used for the function.
//Call is used when we know the number of arguments is known
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
//Apply is used when we do not know the number of arguments
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

//ARRAY FUNCTIONS AND METHODS
//concat
//concat() is a method used to merge two or more arrays. It does not change the existing array, but instead returns a new array.
const concatArr = [1, 2, 3, 4, 5];
const concatNewArr = concatArr.concat([6, 7, 8]);

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
//And overall will return true
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
//Rest parameter should always be used as the last parameter of a function
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
//Note: only function declarations and variables declared with the var keyword are hoisted not function expressions or arrow functions, let and const keywords.
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

//Async and await
//Async/await is built on top of promises
//The async keyword makes the function return an implicit promise
const asyncFunc = async () => {
  try {
    await console.log("Success of async");
  } catch (e) {
    console.log(e);
  }
};
asyncFunc();
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

//Set
//One functionality of set would be to remove duplicates from an array
const dupArray = [1, 2, 2, 3, 5];
const arrayWNoDup = [...new Set(dupArray)];
console.log("Removing duplicates using set: ", arrayWNoDup);
//Sets are used to store unique and ordered values
const set1 = new Set([1, 2, 3, 4, 5]);
console.log("SET1 initial:", set1);
console.log(set1.add(8));
console.log("SET1 after add:", set1);
//Duplicate element will not be added, it is a SET
//delete returns true or false
console.log(set1.delete(1));
console.log("SET1 after delete:", set1);
console.log("Using has method", set1.has(2));
console.log("Length of the set using size:", set1.size);
//to remove all elements use set1.clear()

//Weakset
//Sets are used to store unique and ordered values
//Like set but can only contain objects and no other type. An object inside the weakset is referenced weakly i.e.
//if the object inside the weakset does not have a reference, it will be garbage collected.
//Unlike set it only has three methods add(), delete(), has()
//We need to pass an array inside the weakSet
const objWeak = { message: "Hello" };
const weakSet1 = new WeakSet([objWeak]);
console.log("Testing weak set", weakSet1.has(objWeak));

//WeakMap
//Map is used to store-key value pairs. In a Map, the key and value can be both primitive and non-primitive types.
//Weakmap and map are similar, but the key and value both should always be objects.
//If there are no references to the object, the object will be garbage collected.
const map1 = new Map();
map1.set("Value", 1);
const map2 = new WeakMap();
map2.set({ type: "Value" }, { data: 1 });
map2.set({ type: "Value" }, { data: 2 });
console.log("Testing weakMap", map2.get({ type: "Value" }));

//Temporal Dead Zone is a behaviour that occurs with variables declared using let and const keywords.
//It is a behaviour where we try to access a variable before it is initialized.
//x = 23;
//let x; //this will throw reference error

//Event Propogation: when an event occurs in a DOM element
//Event propogation has 3 phases:
//1. Capturing Phase: event starts from the window then goes down every element until it reaches the target element
//2. Target Phase: event reached the target phase.
//3. Bubbling phase: event bubbles up the parents and goes up until it reaches the window.

//Event Bubbling
//JavaScript allows DOM elements to be nested inside each other.
//In such a case, if the handler of the child is clicked, the handler of parent will also work as if it were clicked too.

// !! converts a value into a boolean
console.log(!![].length); //logs false
console.log(!![]); //logs true

//Arguments object
//It is an array-like object but it does not have the array functions like map, filter, forEach, reduce
//We can convert the argument objct into an array using Array.prototype.slice.call(arguments)
//Arguments object does not work on ES6 arrow functions.
//We will have to use the rest operator for arrow functions
const argumentFunc = (...args) => {
  return args;
};

console.log("Arguments object in arrow functions", argumentFunc(1, 2, 3, 4));

//MODULES
const modulo = () => {
  console.log("Testing module");
};
module.exports = modulo;
//to import we do import moduleFunc from "./....js" or import * as helpers from ""
//We can also create the functions inside a class and export a single class
class Helpers {
  printMsg(msg) {
    console.log(msg);
  }
  sayHello() {
    console.log("Hello");
  }
}

module.exports = Helpers;

//import Helpers from ""

//Wrapper objects
//When we declare a string variable we can automatically access a method like .toUpperCase() even though string is a primitive type
//When we call the toUpperCase(), the string is converted into an object (Wrapper object) and the variable will behave like an object
//The wrapper objects are String, Number, Boolean, Symbol, BigInt
//The created object will be immediately discarded after calling the method

//AJAX Asynchronous JavaScript and XML, It is a group of related technologies used to display data asynchronously.
//What this means is that we can send data to the server and get data from the server without reloading the web page.

//Timers in JS
//Used to execute a piece of code at a set time or also repeat a code after set interval.
// setTimeout(function, delay), setInterval(function, interval), clearInterval(id)

//ViewState and SessionState
//ViewState is used for client-side state management, data will not be secure since it will be exposed to the clients, info stored in client
//ViewState is specific to a page session i.e. another page cannot view the state of the current page.
//Session state is used for server-side state management, maintained at session level so all webpages can access the data
//Session is only valid for object types, info is stored on the server

//Popups in JS
//Alert, Confirm, Prompt

//Void(0)
//Used to prevent the page from refreshing, used to call another method without refreshing the page

//Blur function
//Used to remove the focus from the specified object

//ERRORS
//1. Load time errors: Error that comes up when loading the webpage, the errors are dynamically generated, due to improper syntax
//2. Run time errors: Error that comes up due to misue of the command inside the HTML language
//3. Logical errors: Bad logic

//window.onload vs onDocumentReady
//onload function is not loaded until all the information on the page is loaded. This leads to substantial delay before any code is executed
//onDocumentReady loads the code as soon as the DOM is loaded.

//Targetting a frame
// This can be done by including the name of the required frame in the hyperlink using the 'target' attribute.
// <a href="/newpage.htm" target="newframe">>New Page</a>

//Web garden vs Web farm
//These are hosting systems. Web garden uses many processors in a single server wherease web farm uses many servers

// This can be done by Using JavaScript extensions (runs from JavaScript Editor), example for opening of a file -
// fh = fopen(getScriptPath(), 0);

//Event handlers
//onSubmit onClick we have to do something

//Deferred scripts
//By default the parsing of HTML code during page loading is paused until all the script is loaded
//By using Deferred, script execution is delayed until the parsing of HTML code is done which makes the webpage loading and displaying faster.

//Screen objects
//Used to read the information from the client's screen
//AvailHeight, AvailWidth, ColorDepth, Height, Width

//escape and unescape function
//escape function is used to make a transferable string and unescape is used to decode that string
console.log("Escape test", escape("Hello how are you"));
console.log("Unescape test", unescape("Hello%20how%20are%20you"));

//encodeURI and decodeURI
//encodeURI is used to convert URL into their hex coding, decodeURI is use to convert the encoded URL back to normal
console.log("Encode URI test", encodeURI("my test.asp?name=ståle&car=saab"));
console.log(
  "Decode URI test",
  decodeURI("my%20test.asp?name=st%C3%A5le&car=saab")
);

//innerHTML
//It is not advised to use innerHTML because innerHTML content is refereshed everytime and is slower.
//There is no scope validation for innerHTML so it can make the webpage unstable

//Hide JS code in old browsers
// Add <script><!-- //--></script>
