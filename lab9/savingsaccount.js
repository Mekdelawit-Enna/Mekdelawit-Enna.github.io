
class SavingsAccount extends Account{
    constructor(number, interest){
        super(number);
        this.interest = interest;
    }

    setInterest(interest)
    {
        this.interest = interest;
    }
    getInterest(){
        return this.interest;
    }
    addInterest(){
        let iBalance = super.getBalance() * (this.interest / 100);
        super.deposit(iBalance);
    }
    endOfMonth()
    {
        this.addInterest();
        return "Interest added SavingsAccount "+ this.getNumber() + " : balance: " + this.getBalance() + " interest: " + this.getInterest();
    }
    toString()
    {
        return "Saving Account " + super.number + " has " + super.getBalance + "$";
    }
}


// let accs = new SavingsAccount(111, 10);
// accs.deposit(1000);
// accs.addInterest();
// (console.log(accs.getBalance()))();