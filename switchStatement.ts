/*
switch(expression){
case value1:
    Code to execute
    break;
case value2:
    Code to execute
    break;
case value3:
    Code to execute
    break;
default:
    Code to execute
}
*/

var day = 10;
var dayName;

switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    default:
        dayName = 'Weekend';
}

console.log(dayName);