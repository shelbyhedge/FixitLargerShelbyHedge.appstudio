//fixed semantic error + added number operator
var firstNum = Number(prompt("Enter a number."))
// correct secondnum variable + added number operator
var secondNum = Number(prompt("Enter another number."))
firstNum = firstNum + 10
secondNum = secondNum + 9
// added paranthese around conditional statement
if (firstNum <= secondNum) {
    console.log('The first number is larger than the second.')
// added curly braket for first condition
} else { 
    console.log(`The second number is larger than the first.`)
};
    