// If I am a Non married - I can be happy. I can play. I can go with my friends
// If I am married - I have to work. I have to cook.

/*
If Block
Syntax -
if(condition which need to satisfy){
logic
}
*/

// var myCurrentAge = 10;
// if(myCurrentAge>=18){
//     console.log('You are already an Adult');
// }

/*
If Else Block
Syntax -
if(true){
logic
}
else{
logic
}
*/

// var myCurrentAge = 10;
// if(myCurrentAge>=18){
//     console.log('You are already an Adult');
// }
// else{
//     console.log('You are a Minor');
// }

/*
If Else-If Block
Syntax -
if(true){
logic
}
else if(true){
logic
}
else if(true){
logic
}
else{
logic
}
*/

var myCurrentAge = 70;
if(myCurrentAge<18){
    console.log('You are Minor');
}
else if(myCurrentAge>=18 && myCurrentAge<65){
    console.log('You are Adult');
}
else {
    console.log('You are Senior Citizen')
}