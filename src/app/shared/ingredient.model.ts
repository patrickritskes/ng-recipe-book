export class Ingredient {
    prefix: string;
    amount: number;
    name: string;    

    constructor(amount: number, prefix: string, name: string) {
        this.prefix = prefix;
        this.amount = amount;
        this.name = name;        
    }
}