function drawRactangle(options) {
    let width = options.width;
    let length = options.length;
}
drawRactangle({
    width: 30,
    length: 20
});
function drawRactangle2(options) {
    let width = options.width;
    let length = options.length;
}
drawRactangle2({
    width: 30,
    length: 20
});
class Player6 {
    constructor(name, //here we can't set private accesss modifier explicitly.if we want;need to do in different process//(learn in future)
    age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
let sakib;
sakib = new Player6('sakib', 35, 'Bangladesh');
const play = [];
play.push(sakib);
export {};
//more complex things that we can learn in ts;hopefully in the future.
//Generics,Enum,Tuples,etc.
