// alert("js File attached")

var name="Sunny";//var can be Reassign and Redecleared
var address="Vadodara";
console.log(name);


console.group('This is Grouped TEXT_START');
console.log('Normal Text');
console.warn('Normal Text');
console.error('Normal Text');
console.groupEnd('This is Grouped TEXT_END');


console.group ('ERRORS');
console.error('Hello');
console.error('Hello');
console.error('Hello');
console.error('Hello');
console.groupEnd('ERRORS');

console.group ('WARNINGS');
console.warn('Warning');
console.warn('Warning');
console.warn('Warning');
console.warn('Warning');
console.groupEnd('WARNINGS');