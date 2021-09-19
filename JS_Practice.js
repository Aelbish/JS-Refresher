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
  console.log("HELLO FROM IIFE");
})();

