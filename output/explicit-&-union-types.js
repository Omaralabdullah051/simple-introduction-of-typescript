"use strict";
//when we want to declare the variable and doesn't assigned it with values.ts infer the declare variable as any type.
let a;
a = 'asif';
a = 34;
//but if we want to declare the variable and want to assign the variable with string values in the future;we need to set data explicitly.
let a2;
a2 = 'asif';
a2 = 34; //because we explicitly set data type.
let b;
b = 34;
b = 'asif'; //explicitly set data type.
//array 
let c = []; //now ts infer it as any type of array.
c.push(58);
c.push(true);
c.push('hello');
//but if we want to declare the array and want to push into string values in the future;we need to set data explicitly.
let c2 = [];
c2.push('hello');
c2.push(34);
let c3 = [];
c3.push('hello');
c3.push(34);
//Union types
//normal variable
let d;
//array
let e = [];
e.push('hello');
e.push(34);
//explicit types
//object
let f;
f = 6;
f = 'hello';
f = {
    name: 'sakib',
    age: 17,
    country: 'bangladesh',
}; //we can set any properties because we defined f variable as a object type.so ts don't find any f object structure to follow.
//but 
let f2;
f2 = {
    name: 'sakib',
    age: 17,
}; //shows error because ts follow the structure of f2 object.we need to  insert the isCaptain property here.
let g;
g = [1, 2, 3, 4, 5, 6]; //here we declared the g variable as an object data types.so it can be an array.array is also a kind of object data types.
//but
let g2;
g2 = [1, 3]; //because here it's a vanilla object.
