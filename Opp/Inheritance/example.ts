class Product{
    constructor(
        public id:string, 
        public price:number, 
        public description:string
        ){}

    display():void{
        console.log(
            `
            ID:${this.id},
            Price:${this.price},
            Description:${this.description}

            `
        );
    }
}

class Book extends Product{
    constructor(
        public id:string, 
        public price:number, 
        public description:string,
        public author:string, 
        public title:string){
        super(id,price,description);
    }

    display():void{
        super.display(); //it will first display price , id and description and additionally author and title of the book
        console.log(`the author of the book is ${this.author} and the title of the book is ${this.title}.`)
    }
}



class Electronic extends Product{
    constructor(
        public id:string, 
        public price:number, 
        public description:string,
        public brand:string, 
        public model:string){
        super(id,price,description);
    }

    display():void{
        super.display(); //it will first display price , id and description and additionally author and title of the book
        console.log(`the electronic brand is ${this.brand} and the model is ${this.model}.`);
    }
}



let book = new Book("1",20,"anime","Ansula","My Amazination");
book.display();
let electronic = new Electronic("30",400,"gaming laptop","Asus Rog","M16");
electronic.display();

