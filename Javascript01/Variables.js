const accountId  = 12221
let accountEmail = "aman@google.com"
var accountPassword = "12345"
accountCity = "jaipur"


//accountId = 2
accountEmail = "a@google.com"
accountCity = "amabala"
accountPassword = "12232423"

console.log(accountId);

/* 
Prefer not to use var 
because of issue in block scope and functonal scope
*/ 


console.table([accountId, accountEmail, accountCity])