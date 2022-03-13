const userDetails = (
    id: string | number,
    user: { name: string; age: number }
) => {
    console.log(`User id is ${id},name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: { name: string; age: number }) => {
    console.log(`Hello ${user.age > 50 ? 'sir' : 'Mr.'}`);
};
//here when we want to set the explicit type;we need to write it over and over again.

//so the easy steps is type aliases.
type stringOrNum = string | number;
type userType = { name: string, age: number };
const userDetails2 = (id: stringOrNum, user: userType) => {
    console.log(`User id is ${id},name is ${user.name} and age is ${user.age}`);
};

const sayHello2 = (user: userType) => {
    console.log(`Hello ${user.age > 50 ? 'sir' : 'Mr.'}`);
};
