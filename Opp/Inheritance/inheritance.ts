class Elf{
    constructor(public name:string,public power:string){
    
    }
    introduce(){
        console.log(`Hello i'm ${this.name} and my power is ${this.power}`);
    }
}

class TallElf extends Elf{
    constructor(public name:string, public power:string){
        super(name, power);
    }
}


let newElf = new TallElf("andy","atomic");
newElf.introduce();