function tester()
{
    let account = new Account(100);
    account.deposit(1000);
   
    
    let saving = new SavingsAccount(111, 10);
    saving.deposit(500);
    saving.addInterest();

    let checking = new CheckingAccount(112, 300);
    checking.deposit(1000);
  

    let bank = new Bank();
    bank.addAccount();
    bank.addSavingsAccount(10);
    bank.addCheckingAccount(300);
     
    describe("getNumber", function(){
        it("returns the account number", function(){
            assert.equal(100, account.getNumber());
        })
    })
    describe("deposit", function(){
        it("Deposits money to the account", () =>{
                account.deposit(500);
                assert.equal(1500, account.getBalance());
        })
    });
    describe("getBalance", function(){
        it("returns the balance in the account", function(){
            assert.equal(1500, account.getBalance());
        })
    })
   
    describe("Withdraw", function(){
        it("Deducts a given amonut of money from the account", ()=>{
            account.withdraw(200);
            assert.equal(1300, account.getBalance());
        })
    });

    describe("endOfMonth for Account", function(){
        it("returns nothing", function(){
            assert.equal("", account.endOfMonth());
        })
    });
    describe("endOfMonth for checkingAccount", function(){
        it("Returns a report for checking account", function(){
            assert.equal("checking account okay" + checking.getBalance(), checking.endOfMonth());
        })
    });
    describe("endOfMonth for savingAccount", function(){
        it("Returns a report for saving account", () =>{
            
            assert.equal("Interest added SavingsAccount "+ saving._number + " : balance: 605" + " interest: " + saving.getInterest(), saving.endOfMonth());
        })
    });

    describe("Add Interest", function(){
        it("adds Interest to the account", ()=>{
            saving.addInterest();
            assert.equal(saving.getBalance(), 665.5);
        })
    })

    
}

tester();