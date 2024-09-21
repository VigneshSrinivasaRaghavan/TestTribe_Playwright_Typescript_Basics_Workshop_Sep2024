var studentDetails = {
    studentName: "Vignesh",
    age: 30,   
};

console.log(studentDetails);
console.log(studentDetails.studentName);

var studentDetails:{studentName: string, age: number} = {
    studentName: "Vignesh",
    age: 30,   
};
studentDetails.studentName = "Vignesh S";
console.log(studentDetails.studentName);