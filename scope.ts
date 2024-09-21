/*
1. Global Scope
2. Function Scope / Local Scope
3. Block Scope
*/

let globalVariable = 1;
console.log(globalVariable);

function myFunc(){
    console.log(globalVariable);
    let functionVarVariable = 2;
    console.log(functionVarVariable);
    if(true){
        console.log(globalVariable);
        console.log(functionVarVariable);
        let blockVarVariable = 3;
        console.log(blockVarVariable);
    }
    
    console.log(blockVarVariable);
}
console.log(functionVarVariable);
console.log(blockVarVariable);
