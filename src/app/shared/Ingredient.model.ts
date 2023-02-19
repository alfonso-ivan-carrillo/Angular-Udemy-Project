export class Ingredient {
    // angular short cut - this is the same as setting up public variables and then a constructor as commented out below
    // this short cut is the equal as the info set below it
    constructor(public name: string, public amount: number){}

    // public name: string;
    // public amount: number;

    // constructor(name: string, amount: number){
    //     this.name = name;
    //     this.amount = amount;
    // }
}