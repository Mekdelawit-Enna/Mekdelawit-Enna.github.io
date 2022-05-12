class Bank{
    
    static nextNumber = 0;
    constructor() {
        
        this.accounts = [];
    }
  
    addAccount()
    {
        this.accounts.push(new Account(this.nextNumber + 1));
        return this.nextNumber;
    }
    addSavingsAccount(interest)
    {
        this.accounts.push(new SavingsAccount(this.nextNumber + 1, interest));
        return this.nextNumber;
    }
    addCheckingAccount(limit)
    {
        this.accounts.push(new CheckingAccount(this.nextNumber + 1, limit));
        return this.nextNumber;
    }
    closeAccount(number)
    {
        for(let i = 0; i < this.accounts.length; i++)
        {
            if(this.accounts[i].getNumber === number)
            {
                this.accounts.splice(i, 1);
            }
        }
        
    }
    accountReport()
    {
        let report;
        for(let i = 0; i < this.accounts.length; i++)
        {
             report = report + this.accounts[i].toString() + "\n";
        }
        return report;
    }
    endOfMonth()
    {
        for(let i = 0; this.accounts.length; i++)
        {
            console.log(this.accounts[i].endOfMonth());
        }
    }
}