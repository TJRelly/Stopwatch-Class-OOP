class Account{
  constructor(name){
    this.name = name
    this.balance = 0
  }
  credit(amount){
    this.balance += amount
  }
  debit(amount){
    this.balance -= amount
  }
  describe(){
    return `owner: ${this.name}, balance: $${this.balance}`
  }
}

const sean = new Account('Sean')
const georges = new Account('Georges')
const brad = new Account('Brad')

let accounts = [sean, georges, brad]

accounts.forEach(account => console.log(account.describe()))
accounts.forEach(account => account.credit(1000))
accounts.forEach(account => console.log(account.describe()))
sean.credit(2000)
georges.debit(500)
accounts.forEach(account => console.log(account.describe()))