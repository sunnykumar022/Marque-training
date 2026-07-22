let str="Laksh"
let name="sunny"
str.__proto__.Reverse=function(){
    return this.split("").reverse("").join("");

}
console.log(Object().__proto__);

console.log(str.Reverse());
console.log(name.Reverse());

String.prototype.transform=function (){
    return this.split("").join("*");
}
console.log(name.transform());
