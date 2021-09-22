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

//Check if the number is prime
const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

//Find prime factors of a given number
const primeFactors = (number) => {
  let primeFactorsArray = [];
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      primeFactorsArray.push(i);
    }
  }
  return primeFactorsArray;
};

//Find the nth Fibonacci
const nthFib = (num) => {
  let fibArray = [0, 1];
  if (num === 0) {
    return 0;
  } else if (num <= 2) {
    return 1;
  }
  for (let i = 2; i <= num; i++) {
    fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
  }
  return fibArray[num];
};

//Find the nth Fibonacci using recursion
const nthFibWRecursion = (num) => {
  if (num <= 1) {
    return num;
  } else {
    return nthFibWRecursion(num - 1) + nthFibWRecursion(num - 2);
  }
};

