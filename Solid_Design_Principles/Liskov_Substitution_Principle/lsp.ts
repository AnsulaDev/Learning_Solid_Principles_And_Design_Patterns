abstract class Shape{
    abstract calculateArea():number;
}

class Rectangle extends Shape{
    constructor(public width:number, public height:number){
        super();

    }
    public calculateArea(): number{
        return this.width *  this.height;
    }
}


class Square extends Shape{
    constructor(public side:number){
        super();
    }
    public  calculateArea(): number {
        return this.side * this.side;
    }
}


