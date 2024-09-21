/*
function functionName(){
Logics
}
*/

function greeting(){
    console.log('Welcome Students');
}

/*
function functionName(parameterName:dataType){
logic to use that parameter
}
*/

function greetingStudent(studentName:string){
    console.log('Welcome '+studentName);
}

/*
function functionName(parameterName1:dataType, parameterName2?:dataType, parameterName3:dataType=value){
logic to use that parameter
}
*/

// greeting();
// greetingStudent("Minal");
// greetingStudent("Kishore");
// greetingStudent("Sushanth");

function add(a:number, b:number){
    return a + b;
}

console.log(add(2,3));

// Arrow Functions
var addFunction = (a:number, b:number)=> a + b;

console.log(addFunction(10,20));