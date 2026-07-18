const accountId=144553
let accountEmail="sunny@gmail.com"
var accountPassword="12345"
accountCity="Jaipur";
let accountState;

// accountId=2  //not allowed

accountEmail="hc@hc.com"
accountPassword="2125565"
accountCity="Bengaluru"
console.log(accountId);
console.table([accountId,accountState,accountEmail, accountPassword,accountCity])

console.log(typeof accountCity);

/*
 Prefer not to use var
 because of issue in block scope and functional scope
*/