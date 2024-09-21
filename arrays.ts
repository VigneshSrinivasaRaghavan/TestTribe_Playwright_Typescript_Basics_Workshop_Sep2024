// Array Litreal
var fruits = ["banana","mango","kiwi"];
console.log(fruits);

// Array Constructor
var fruits2 = new Array("Strawberry", "Musk melon", "Guava");
console.log(fruits2);

// Accesing Array Elements
console.log(fruits[1]);

// Modify 
fruits[1] = "Apple";
console.log(fruits[1]);

// Restricting Array Input data type
var numberArray:number[] = [1,2,3,4,5];
// numberArray[4] = 6;

// Array Methods
numberArray.push(6); // Add elements to the last entry of Array
console.log(numberArray);

numberArray.pop(); // Delete the last element in the array.
console.log(numberArray);

numberArray.unshift(0) // Add elements to the 1st entry of Array
console.log(numberArray);

numberArray.shift(); // Delete the first element in the array
console.log(numberArray);