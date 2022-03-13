class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const mashrafi = new Player('mashrafi', 40, 'Bangladesh');
const tamim = new Player('tamim', 37, 'Bangladesh');
const players = [];
players.push(tamim); //we can't push string,number,etc in that case.
players.push(mashrafi);
import { Player5 } from "./classes/player.js"; //player.js(import from js)
const mashrafi5 = new Player5('mashrafi', 40, 'Bangladesh');
const tamim5 = new Player5('tamim', 37, 'Bangladesh');
console.log(mashrafi5.name);
console.log(tamim5.name);
