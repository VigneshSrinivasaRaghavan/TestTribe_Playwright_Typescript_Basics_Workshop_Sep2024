// Arithmetic Operators
var a = 20;
var b = 10;
var sum = a + b; // 30
var differnce = a - b ; // 10
var multiplication = a * b; // 200
var quotient = a / b; // Quotient -- 2
var reminder = a % b; // Reminder -- 0

// Comparison Operators
var isEqual = a==b; // false
var isStrictEqual = a===b; // false
var isNotEqual = a!=b; // true
var greaterThan = a>b; // true
var lesserThan = a<b; // false
var greaterThanEqual = a>=b; // true
var lesserThanEqual = a<=b; // false

// Logical Operator -- Need to be done on top of Boolean
var isTrue = true;
var isFalse = false;

var andResult = isTrue && isFalse; // false
var orResult = isTrue || isFalse; // true
var notResult = !isTrue; // false


// Assignment Operator
a += 3; // a = a + 3; --> 23
a -= 5; // a = a - 5; --> 18

// Ternary Operator
var myAge = 20;
var message = myAge>=18 ? "Adult" : "Minor";