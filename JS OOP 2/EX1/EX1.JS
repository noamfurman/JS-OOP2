class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    didwin() { //method
        if (this.score > 30) {
            console.log(this.name + " score is " + this.score);
        } else {
            console.log(this.name + " sucks go home ");
        }
    }
}
let plr1 = new Player ("lebron James");//new player
plr1.score =50;///we will define our score of the player

plr1.didwin();
