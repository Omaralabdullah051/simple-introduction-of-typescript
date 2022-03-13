function drawRactangle(options: { width: number, length: number }) {
    let width = options.width;
    let length = options.length;
}
drawRactangle({
    width: 30,
    length: 20
});



//interface give us shape/structure
//implement interface on object
interface RectangleOptions {
    width: number;
    length: number;
}

function drawRactangle2(options: RectangleOptions) {
    let width = options.width;
    let length = options.length;
}
drawRactangle2({
    width: 30,
    length: 20
});



//implement interface on class
import { Isplayer } from './interface/isPlayer.js';//go module-system.ts to know import and export
class Player6 implements Isplayer {
    constructor(
        public name: string,//here we can't set private accesss modifier explicitly.if we want;need to do in different process//(learn in future)
        public age: number,
        readonly country: string
    ) { }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}

let sakib: Isplayer;
sakib = new Player6('sakib', 35, 'Bangladesh');

const play: Isplayer[] = [];
play.push(sakib);



//more complex things that we can learn in ts;hopefully in the future.
//Generics,Enum,Tuples,etc.