let arrayofcars=['Maruti','Brezza','Innova Hycross', 'Hundai'];


// const [first,second,third]=arrayofcars;
// console.log(first);//MAruti
// console.log(second);//Brezza
// console.log(third);//Innova
// =====================================================
// const[first,second,...third]=[...arrayofcars];
// console.log(first);
// console.log(second);
// console.log(third);

/*
Maruti
Brezza
[ 'Innova Hycross', 'Hundai' ]
*/

// =======================================
// ==Skip====

// const [first,,...second]=[...arrayofcars];//skips the second value
// console.log(first);
// console.log(second);

/*
Maruti
[ 'Innova Hycross', 'Hundai' ]
*/


//===============================================
//=====Object Destructiong

const user={
    name: 'John',
    age:30,
    email:'john@gmail.com',
    phone:6202200180
}

const {age,phone,address}=user;
console.log(age);
console.log(address);
console.log(phone);
/*
30
undefined  -->address is not present in user 
6202200180
*/