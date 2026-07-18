// Primitive

//7 types: String,Number,Boolean,null,undefined,symbol,BigInt

const id=Symbol("123")
const anotherId=Symbol("123")
// console.log(id===anotherId);


//Reference (Non Primitive)

//Array,objects,Functions

const heros=["shaktiman", "naagraj", "doga"];
let myObj={
    name:"Sunny",
    age:22,
}

const myfunction=function(){
    console.log("Hello World");   

}
// console.log(typeof myfunction);//function

//==============================================

//stack(Primitive),, Heap(Non-Primitive)
let myyoutubename="hitesh"
let anothername=myyoutubename  //copy of data pass (Stack )
console.log(anothername);
anothername="Chaiaurcode"

console.log(myyoutubename);
console.log(anothername);

let user={
    email:"user@gmail.copm",
    upi:"user@ybl"
}

let userTwo=user 
userTwo.email="sunny@gmail.com"// (non-Primitive)->pass reference ->stores in heap memory

console.log(user.email);
console.log(userTwo.email);




