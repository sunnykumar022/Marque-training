
// function BasicStudentDetails() {
    
//     let students = [
//         {
//             name: "Sunny",
//             email: "sunnykumar00802@gmail.com",
//             phone: "9876543210"
//         },
//         {
//             name: "varun",
//             email: "varun@gmail.com",
//             phone: "9123456780"
//         },
//         {
//             name: "Aman",
//             email: "aman@gmail.com",
//             phone: "9988776655"
//         }
//     ];

   
//     return students;
// }

// // Example usage
// let studentArray = BasicStudentDetails();
// console.log(studentArray);

// Function to format student details
function BasicStudentDetails(value) {
    return {
        name: value.name,
        email: value.email,
        phone: value.phone,
        isGraduated: value.isGraduated
    };
}

// Example array of students
let students = [
    { name: "Sunny", email: "sunny@example.com", phone: "0000000000", isGraduated: false },
    { name: "Riya", email: "riya@example.com", phone: "1111111111", isGraduated: true },
    { name: "Aman", email: "aman@example.com", phone: "2222222222", isGraduated: false }
];

// Use map to transform each student
let modifiedStudents = students.map((student) => BasicStudentDetails(student));

console.log(modifiedStudents);

const marks = [95, 78, 90, 78, 59];

// Function to calculate percentage
function getPercent(marks) {
    // Step 1: Get total marks using reduce
    const totalMarks = marks.reduce((acc, curr) => acc + curr, 0);

    // Step 2: Calculate maximum possible marks
    const maxMarks = marks.length * 100;

    // Step 3: Calculate percentage
    const percentage = (totalMarks / maxMarks) * 100;

    // Return both values
    return {
        totalMarks: totalMarks,
        percentage: percentage.toFixed(2) + "%"
    };
}

// Example usage
const result = getPercent(marks);
console.log("Total Marks:", result.totalMarks);
console.log("Percentage:", result.percentage);
