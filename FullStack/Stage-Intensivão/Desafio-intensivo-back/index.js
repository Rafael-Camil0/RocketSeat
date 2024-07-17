alert("hello word")
console.log("hello word")
// ---------------------------------------------------------------------------------
let numberOne = 1;
let numberTwo = 1;  
console.log(numberOne+numberTwo)

// --------------------------------------------------------------------------------------
let isNumber = 1;
let isString = "1"
Number.isInteger(isNumber) == true ? console.log("é um numero"):console.log("não é um numero")

Number.isInteger(isString) == true ? console.log("é um numero"):console.log("não é um numero")

// -------------------------------------------------------------------------------------------------

typeof isNumber  == "string" ? console.log("é uma string"):console.log("não é uma string")

typeof isString == "string" ? console.log("é uma string"):console.log("não é uma string")

// -------------------------------------------------------------------------------------------------

let isBoolean = true;


typeof isBoolean  == "boolean" ? console.log("é um booleano"):console.log("não é um booleano")

typeof isString  == "boolean" ? console.log("é um booleano"):console.log("não é um booleano")

// -------------------------------------------------------------------------------------------------
console.log(numberOne-numberTwo)

// -------------------------------------------------------------------------------------------------
console.log(numberOne/numberTwo)

// -------------------------------------------------------------------------------------------------
console.log(numberOne*numberTwo)

// -------------------------------------------------------------------------------------------------
numberOne %2   == 0 ? console.log("O número é par"):console.log("O número é ímpar")

// -------------------------------------------------------------------------------------------------
numberOne %2   == 0 ? console.log("O número é ímpar"):console.log("O número é par")
