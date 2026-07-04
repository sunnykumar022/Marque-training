let isAdmin=false;
checkEvenOdd(91);
checkIsAdminOrNot(isAdmin)
CandidateCanVote(19);

// Check even or odd
function checkEvenOdd(value){
    if(value%2 == 0){
        console.log(`$(value) is Even`);
    }
    else{
        console.log(`$(value) is ODD`);
    }
}
//check user is admin or guest
function checkIsAdminOrNot(value){
    if(value){
        console.log(`User is Admin`);
    }else{
        console.log(`Guest User`)
    }
}



function CandidateCanVote(age) {
    if (age >= 18 && age <= 100) {
console.log('Yes Candidate can Vote');
    } else {
    console.log("NO! Candidate can't vote .");
    }
}