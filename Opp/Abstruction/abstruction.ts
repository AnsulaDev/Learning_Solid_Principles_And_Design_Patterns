//shapes
//Area, Perimeter
//simple - single function calculation total Area.


/* Abstruction is involve hiding the implementation details of a system
and exposing only the essential features to user*/

//interface a Shape

interface Shape{
    area(): number;
    perimeter(): number;
}


class Circle implements Shape{
    constructor(private radius: number){  
    }
    area(): number{
        return Math.PI * this.radius * this.radius;
    }
    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle  implements Shape{
    constructor(private width:number, private height:number){}
    area(): number {
        return this.width * this.height;
    }
    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}


function calculateTotalArea(shape:Shape): number{
    return shape.area();
}


//client code

let circle: Circle = new Circle(5);

let rectangle:Rectangle = new Rectangle(4,6);

console.log("Ara of Circle:",calculateTotalArea(circle))
console.log("Ara of reactangle:",calculateTotalArea(rectangle))



//some commomn examples of Abstruction in typeScript.
//Date Class
//Get Current Year
//Get Current Month
//Get Current Date

const now = new Date();

const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1;
const currentDate = now.getDate();

console.log(currentYear);
console.log(currentMonth);
console.log(currentDate);