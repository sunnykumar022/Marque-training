// Primitive

//7 types: String,Number,Boolean,null,undefined,symbol,BigInnt

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
console.log(typeof myfunction);

