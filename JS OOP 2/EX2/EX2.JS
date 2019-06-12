class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    didwin() { //method
        if(this.scroe > 30){
            return true;
        } else {
            return false;
        }
    }
    checkIfPlayerWon(){
        if(this.didwin() === true){
            console.log("he won");
        } else {
            console.log("you suck go home");
        }
    }
}
let plr1 = new Player ("lebron James");//new player
let plr2 = new Player ("mike tyson");//new player

plr1.score =50;//we will define our score of the player
plr2.score =20;//we will define our score of the player

plr1.checkIfPlayerWon();
