class Movie {
    constructor(title, director){
        this.title=title;
        this.director=director;
    }
    toString() {
        console.log( this.title + " by " + this.director);
        }
    }

let mov1= new Movie("Fast & Furious","Gary Scott Thompson");
let mov2= new Movie("Sonic The Hedgehog","Jeff Pauler");

mov1.toString();
mov2.toString();