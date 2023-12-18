/*The Open-Closed Principle states that "software entities (classes, modules, functions, etc.) 
should be open for extension, but closed for modification.The Open-Closed Principle states that
"software entities (classes, modules, functions, etc.) 
should be open for extension, but closed for modification.*/


/* Open for extension: This means that the behavior of the software 
entity can be extended, that is, 
we should be able to add new features or behavior to it.*/

/* Closed for modification: This means that once the software entity 
is developed and it has been reviewed and tested, the 
code should not be touched (to correct the software behavior).*/


//example

// regular customer get 10%, and 1 loyality point
// premium customer get 20%, and 2 loyality points
// gold customer get 30%,and 3 loyality points

interface Customer{
    giveDiscount(): number;
    addLoyaltyPoints(amountSpent:number):number;
}

class RegularCustomer implements Customer{
    giveDiscount(): number {
        return 10;
    }
    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent;
    }
}
class PremiumCustomer implements Customer{
    giveDiscount(): number {
        return 20;
    }
    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent * 2;
    }
}

class GoldCustomer implements Customer{
    giveDiscount(): number {
        return 30;
    }
    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent * 3;
    }
}


class Discount {
    giveDiscount(customer: Customer):number{
        return customer.giveDiscount();
    }
}


let premiumCustomer: PremiumCustomer = new PremiumCustomer();

let goldCustomer: GoldCustomer = new GoldCustomer();
let regularCustomer: RegularCustomer = new RegularCustomer();

let discount: Discount = new Discount();
let printPremiumCustomer =discount.giveDiscount(premiumCustomer);
let printGoldCustomer =discount.giveDiscount(goldCustomer);
let printRegularCustomer =discount.giveDiscount(regularCustomer);


console.log(printPremiumCustomer);
console.log(printGoldCustomer);
console.log(printRegularCustomer);