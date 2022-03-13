//function signature
let myFunction: (x: string, y: string) => void;

//this is function signature
let add: (x: number, y: number) => number;
//when we use the add function further,we need to follow the function signature.
add = (a: number, b: number) => {
    return a + b;
};
console.log(add(10, 20));

//if we don't follow the function signature;ts shows error.
add = (a: string, b: string, c: number){
    console.log(a + b);
}
add(10, 20);//As the function signature; a,b has to be a number and the function is not allow any extra parameter here and the function will return a number.but here we don't return from the function;so the function defaulty return void.



let calculation: (x: number, y: number, z: string) => number;

calculation = (a: number, b: number, c: string) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
}
calculation(5, 6, 'minus');




let userDetails3: (id: number | string, userInfo: {
    name: string,
    age: number
}) => void;

userDetails3 = (id: number | string, user: {
    name: string,
    age: number
}) => {
    console.log(`hello,my name is ${user.name}.my age is ${age}.my id:${id}`);
}
userDetails3(5, { name: 'tamim', age: 17 });