"use strict";
class Player2 {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const mashrafi2 = new Player2('mashrafi', 40, 'Bangladesh');
const tamim2 = new Player2('tamim', 37, 'Bangladesh');
console.log(tamim2.name); //we can access the property from outside because by default,all the properties are public in class.
tamim2.name = 'mashrafi'; //we can set the property from outside aslo.
console.log(tamim2.name);
//if we want to private the properties in class;so that any one can't access the property from outside.
class Player3 {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const mashrafi3 = new Player3('mashrafi', 40, 'Bangladesh');
const tamim3 = new Player3('tamim', 38, 'Bangladesh');
mashrafi3.name = 'tamim';
console.log(mashrafi3.name); //now property name is private and only accessible within class Player3.we can't access the property,can't read the property and can't set the property from the outside of the class.
mashrafi3.age = 30;
console.log(mashrafi3.age); //because property age is public and can accessible from the outside of the class.we can access the property,can read the property and can set the property from the outside of the class.
mashrafi3.country = 'India';
console.log(mashrafi3.country); //we can only read the country property from the outside of the class.
//when we want to set access modifiers explicitly in the class;we can create a class in shortcut.
class Player4 {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const mashrafi4 = new Player4('mashrafi', 40, 'Bangladesh');
const tamim4 = new Player4('tamim', 38, 'Bangladesh');
//note:this shortcut is use only the time when we set access modifiers explicitly in the class.
