const accountId = 1234
let emailId = "smruti@goggle.com"
var password = "5678"
adress = "bbsr" // not recommended

//accountId = 9876 // TypeError: Assignment to constant variable.

console.log(accountId)

/*
prefer to use let over Var
because of block scope and functional scope
*/

let accountState
console.log(accountState) //undefined
