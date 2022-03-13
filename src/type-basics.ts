let playerName = "Mashrafi";
let age = 35;
playerName = 35;/*ts smartly shows error because we assigned it with a number . firstly we declare playerName as a string typed variable and then we assigned it with a number. */
age = 'sakib';/*ts shows error because we assigned it with a string.*/

console.log(playerName);
console.log(age);

//but this time ts don't show error becauese we just declare the variable and don't assigned it with values.so programme assigned cricketer variable with undefined.Now we can assigned this variable with number,string,boolean,etc. but when we declare a variable and assigned with values;ts will infer the type of this variable.so then we can't assigned the variable with different data types.that's the beauty of typeScript.
let cricketer;
cricketer = 'mashrafi';
cricketer = 34;
console.log(playerName);


//explicitly set data type
function multiply(a: number, b: number) {
    return a * b;
}
console.log(multiply('sumit', 4));



//array
let fruits = ['apple', 'banana', 'orage'];
fruits.push(58);//because that is string[].we can't push number in it.

let fruits2 = [];
fruits2.push(58);//now ts don't show error because it is any type of array.

let mixed = ['apple', 3, true];
mixed.push({ name: 'orange', age: 34 });//because it is a string,number&boolean type array.we can't push here object.
//but 
let mixed2 = ['apple', 3, true, {}];
mixed2.push({ name: 'orange', age: 34 });//because it is a string,number,boolean&object type array.



//object
let person = {
    name: 'masrafi',
    age: 35,
    isCaption: true,
};

person.name = 34;//because we declare a object,where name property is a string data type.
person.country = 'bangladesh';//because we declare a object,where we set 3 properties and ts don't found country.ts will follow the structure of currently defined person object.

let person2 = {};
person2.name = 'sakib';//property doesn't exist on person2.
person2.age = 32;//propery doesn't exist on person2.