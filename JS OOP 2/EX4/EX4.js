class Shoe {
    constructor(name, sizes){
        this.name=name;
        this.sizes=sizes;
    }
    toString() {
        console.log( this.title + " by " + this.director);
        }
    
    
    isAvalibleSize (size){
        return this.sizes.includes(size);
    }
}

let sizes = [45,30, 34,40];

let sho1= new Shoe("All Stars", sizes);
console.log(sho1.isAvalibleSize(20));