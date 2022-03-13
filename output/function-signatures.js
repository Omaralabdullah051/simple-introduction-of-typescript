"use strict";
//function signature
let myFunction;
//this is function signature
let add;
//when we use the add function further,we need to follow the function signature.
add = (a, b) => {
    return a + b;
};
console.log(add(10, 20));
//if we don't follow the function signature;ts shows error.
add = (a, b, c) => {
    console.log(a + b);
};
add(10, 20); //As the function signature; a,b has to be a number and the function is not allow any extra parameter here and the function will return a number.but here we don't return from the function;so the function defaulty return void.
let calculation;
calculation = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
calculation(5, 6, 'minus');
let userDetails3;
userDetails3 = (id, user) => {
    console.log(`hello,my name is ${user.name}.my age is ${age}.my id:${id}`);
};
userDetails3(5, { name: 'tamim', age: 17 });
