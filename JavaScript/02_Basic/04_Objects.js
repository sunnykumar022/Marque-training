//const tinderUser= new Object()//singleton obj
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sunny"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"Some@gmail.com",
    fullName:{
        userFullName:{
            firstname:"Sunny",
            lastname:"Kumar"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstname);

const obj1={1:"a",2:"B"}
const obj2={3:"c",4:"d"}

// const obj3={obj1  , obj2}
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'B' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
// console.log(obj3);


const users=[
    {
        id:1,
        email:"sunny@gmail.com",
    },
    {
        id:1,
        email:"sunny@gmail.com",
    },
    {
        id:1,
        email:"sunny@gmail.com",
    },
    {
        id:1,
        email:"sunny@gmail.com",
    },
    {
        id:1,
        email:"sunny@gmail.com",
    },
]

users[1].email

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//======deconstruct Object===========
const course={
    coursename: "js in Hindi",
    price: "999",
    courseInstructor:"hitesh"
}
//course.courseInstructor

// const {courseInstructor}=course
// console.log(courseInstructor);//you can deconsturct like this

//or

const {courseInstructor: instructor}=course
console.log(instructor);



