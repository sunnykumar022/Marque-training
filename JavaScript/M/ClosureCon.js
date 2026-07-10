function outer(){
    let sum=0;
    function inner(){
        sum++;//2
        return sum;

    }
    return inner;
}

let fn =outer() //0
console.log(fn()); //1
console.log(fn()); //2
console.log(fn());//3






function CreateArray() {
    let arr = [];

    return {
        push(value) {
            arr.push(value);
        },

        getElement(index) {
            return arr[index];
        },

        getArray() {
            return arr;
        }
    };
}

let myArray = CreateArray();

myArray.push(10);
myArray.push(20);
myArray.push(30);

console.log(myArray.getElement(1)); // 20
console.log(myArray.getArray());    // [10,20,30]