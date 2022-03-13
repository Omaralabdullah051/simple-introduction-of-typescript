let myFunc: Function;

myFunc = 5;//shows error because it's a function data type.
myFunc = 'hello';
myFunc = () => {
    console.log('hello');
}

//here c is a default parameter
const myFunc2 = (a: string, b: string, c: string = 'true') => {
    console.log(`Hello ${a} & ${b} ${c}`);
};
myFunc2('A', 'B');
//when we don't return from the function in javaScript;js automatically return undefined from the function. But when we don't return from the function explicitly in typeScripts,ts automatically return void from the function.void means there is no data.


const myFunc3 = (a: string, b: string, c: string = 'true') => {
    return a + b + c;
};
console.log(myFunc3('A', 'B'));//now this function returns a string.we can check it by hover over the function name.

const myFunc4 = (a: number, b: number, c: number = 10) => {
    return a + b + c;
};
console.log(myFunc4(15, 5));//now this function returns a number.we can check it by hover over the function name.

//we can explicitly set the data type that the function will return.
const myFunc5 = (a: number, b: number, c: number = 10): string => {
    return a + b + c;
}
console.log(myFunc5(15, 5));//here we explicitly set the string data type that the function will return.but in that case,we return number data type.that's why ts shows error.