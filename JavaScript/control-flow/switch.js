function marksToGrade(marks) {
    switch (true) {
        case (marks >= 90 && marks <= 100):
            return "A+";
        case (marks >= 80):
            return "A";
        case (marks >= 70):
            return "B+";
        case (marks >= 60):
            return "B";
        case (marks >= 50):
            return "C";
        case (marks >= 40):
            return "D";
        case (marks >= 0):
            return "F";
        default:
            return "Invalid Marks";
    }
}

console.log(marksToGrade(88)); 