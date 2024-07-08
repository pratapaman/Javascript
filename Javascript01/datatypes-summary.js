// primitve
// 7 types : String, Number, Boolenarn, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj= {
    name:"aman",
    age:22,
}

const myFunction = function(){
    console.log("hello aman");
}

console.log(typeof myFunction)

// non primitve typeof is object always
