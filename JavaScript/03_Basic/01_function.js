function sayMyName(){
    console.log("Sunny");
    
}

// sayMyName()
// console.log(sayMyName)//[Function: sayMyName]

// function addTwoNumbers(num1,num2){//parameter
//     console.log(num1+num2);
// }
// addTwoNumbers(3,4)//7
// addTwoNumbers(3,"4")//34  //argument

// const result=addTwoNumbers(3,4);//7
// console.log(result);//undegined


function addTwoNumbers(num1,num2){
    let result=num1+num2;
    return result;//after returning no code will get execute
}

const result=addTwoNumbers(2,4);
console.log("Result: ",result);//Result:  6

function loginUserMessage(username="Sunny"){
    return `${username} just logged in`
}
// console.log(loginUserMessage("Sunny"));
// console.log(loginUserMessage());//undefined just loged in

function calculateCartPrice(...num1){//...num1  -> it is rest operator 
    return num1
}

console.log(calculateCartPrice(200,300,400));


const user ={
    username:"Sunny",
    price:199
}
function handleObject(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
    
}
handleObject(user)

const myNewArray=[300,400,500];
function returnSecondValue(getArr){
    return getArr[1];
}
console.log(returnSecondValue(myNewArray));
