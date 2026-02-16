# JavaScript Basics Questions

## 1. What is the difference between null and undefined?

**Answer:** Null is when we intentionally make this empty. For example: lets say we have a variable and we want to make it empty, so we can do `let yousra = null`. On the other hand, undefined is when something exists but we have not assigned any value yet. For example if we say, `let yousra;` and if we run this we will get `undefined` because there is no value yet.

## 2. What is the use of the map() function in JavaScript? How is it different from forEach()?

**Answer:** In simple words, `map` creates a new array where `forEach` just loops. For example, if we have an array `[1,2,3,4]` and if we `map` this and try to multiply by 2 we will get new array of `[2,4,6,8]` but if we do `forEach` it will iterate and just give us values like 2,4,6,8.

## 3. What is the difference between == and ===?

**Answer:** `==` just compares value only but `===` compares value and type both. For example, if we run `console.log("5"==5)` it will give true but `console.log("5"===5)` it will give false. String 5 and number 5 are not the same thing. As `==` does not care about type it gives true where `===` gives false.

## 4. What is the significance of async/await in fetching API data?

**Answer:** It helps to wait. Without that our code will try to run before the data comes. Sometimes it takes time for data to come and if our code runs before the data comes we will get error.

## 5. Explain the concept of Scope in JavaScript (Global, Function, Block)

**Answer:** Scope tells us where we can use the variable. Global scope means it can be used anywhere in the code. Function scope means it can only be used inside function and Block scope means it only can be used inside a block like `{}`.
