const user ={
    username:"Sunny",
    price:999,
    welcomemsg: function(){
        console.log(`${this.username}, welcome to website`)//this refers to current context
        console.log(this)//{ username: 'Sunny', price: 999, welcomemsg: [Function: welcomems
    }
}
// user.welcomemsg()//sunny
// user.username="Sam"
// user.welcomemsg()//sam
console.log(this);

// function chai(){
//     let username="Sunny"
//     console.log(this.username);//undefined
    
// }
// chai()
const chai=() => {
    let username="Sunny"
    console.log(this.username);
    
}

chai()

// const addTwo= (num1,num2)=>{
//     return num1+num2
// }

// console.log(addTwo(3,4));//7
/*
 ====> if {} use in arrow function you have to use return
 ====> if () use in arrow function you dont have to return
 */
const addTwo=(num1,num2) => (num1+num2)
console.log(addTwo(3,4))
