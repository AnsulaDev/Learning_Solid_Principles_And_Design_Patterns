/*Encapsulation promotes the separation of concerns and data hiding, 
making it easier to reason about, maintain, and reuse code. */


// Back Account
//Depositing
//withdrawing
//Balance


class BackAccount{
    private _balance:number;

    constructor(initiabalance: number){
        this._balance = initiabalance;
    }

    //Getter to get balance of the bank account
    public get balance():number{
        return this._balance;
    }

    //Method deposit Money
    public deposit(amount:number):void{
        if(amount <0){
            console.log("Invalid deposit Amount");
            return;
        }
        this._balance += amount;
    }

    //Method to withdraw money

    public withdraw(amount:number): void{
        if(amount<0){
            console.log("Invalid withdrawl amount");
            return;
        }
        if((this._balance - amount) <0){

            console.log("Insufficient fund")
            return;
        }
        this._balance -= amount;
    }

}


const myAccount = new BackAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(`current balance ${myAccount.balance}`);