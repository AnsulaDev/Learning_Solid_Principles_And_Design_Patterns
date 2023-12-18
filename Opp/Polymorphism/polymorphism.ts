//subtype polymorphism
//Interface A shape

interface Shape{
    area(): number;
    perimeter(): number;
}


class CalulateCircle implements Shape{
    constructor(private radius: number){  
    }
    area(): number{
        return Math.PI * this.radius * this.radius;
    }
    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class CalulateRectangle  implements Shape{
    constructor(private width:number, private height:number){}
    area(): number {
        return this.width * this.height;
    }
    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}


function calculatedTotalArea(shape:Shape): number{
    return shape.area();
}




let Calulatecircle: CalulateCircle = new CalulateCircle(5);

let Calulaterectangle:CalulateRectangle = new CalulateRectangle(4,6);

console.log("Ara of Circle:",calculatedTotalArea(Calulatecircle))
console.log("Ara of reactangle:",calculatedTotalArea(Calulaterectangle))
