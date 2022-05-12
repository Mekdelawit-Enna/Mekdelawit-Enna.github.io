class CheckingAccount extends Account{
   constructor(number, overDraft)
   {
       super(number);
       this.overDraftLimit = overDraft;
   }
   getOverDraftLimit()
   {
       return this.overDraftLimit;
   }

   setOverDraftLimit(limit)
   {
       this.overDraftLimit = limit;

       
   }
   withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance + this.overDraftLimit) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }
    endOfMonth()
    {
        if(this.getBalance() < 0)
        {
            return "Warning, low balance CheckingAccount " + this.getNumber() + " : balance: " + this.getBalance() + " overdraft limit: " + this.getOverDraftLimit();
        }
        else{
            return "checking account okay" + this.getBalance();
        }
        
    }
    toString()
    {
        return "Checking Account " + super.number + " has " + super.getBalance + "$";

    }
}