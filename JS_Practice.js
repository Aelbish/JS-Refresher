//Memoization Code
const memoizationExampleAdd1 = () => {
  //Memoization shows an example of higher order function
  let cache = {};
  return (num) => {
    //Closure property in work since we can acess the cache object inside this function
    if (num in cache) {
      console.log("Cached");
      return cache[num];
    } else {
      console.log("Newly computed");
      cache[num] = num + 1;
      return cache[num];
    }
  };
};
const memoizer = memoizationExampleAdd1();
// memoizer(1);
// memoizer(1);
// memoizer(2);
// memoizer(2);

//Finding sum of an array using recursion - Linear time complexity O(n)
const findSumOfArrayRecursion = (anArray) => {
  //Recursion always needs a base case which will actually return the value to comeback up from the stack of function calls
  if (anArray.length === 1) {
    return anArray[0];
  } else {
    return anArray.pop() + findSumOfArrayRecursion(anArray);
  }
};
//console.log(findSumOfArrayRecursion([1, 2, 3]));

//IIFE
(() => {
  //replace return with console.log
  return "HELLO FROM IIFE";
})();

//Higher order function: Function that takes another function or returns a function
//This add function takes another anonymous function
const add = (x) => (y) => x + y;
//console.log(add(12)(12));

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