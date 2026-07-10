let greetMsg=greet('Sunny');
console.log(greetMsg);


function greet(name){
    return `Hello, ${name}!`;
}


/*
function can be stored as a variable
funtion can be assign to a variable
function can return value
*/

function sayHello(name) {
    console.log(` Hello ${name}`);

}
//funtion can be passed as and argument
function execute(fn, name) {
    fn(name);
}
execute(sayHello,'Sunny'); // Hello!



// function MorningGreet(){
   
//    return function(){
//     console.log(`Good Morning !`);
//    };
// }


// let greetingMsg=MorningGreet();

// greetMsg();