//singleton

// object Literals

const mySym=Symbol("key1")

const jsuser={
    name:"Sunny",
    "full name":"Sunny kumar",//you cant acces through . notation
    age:19,
    [mySym]:"mykey1",
    location:"Jaipur",
    email:"Sunnnykumar@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Mondays","Saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);

// console.log(jsuser[mySym]);


jsuser.email="s@gmail.com";
// console.log(jsuser.email);

// Object.freeze(jsuser)
jsuser.email="Sunnnykumar@gmail.com"
// console.log(jsuser);

jsuser.greeting=function(){
    console.log("Hello js user");
    
}
jsuser.greetingTwo=function(){
    console.log(`Hello js user, ${this.name}`);
    
}
console.log(jsuser.greeting());
jsuser.greetingTwo();
console.log(jsuser.greetingTwo())


