const args = require('yargs').argv;
const add = require('./add').add;
const subtract = require('./subtract').subtract;
const multiply = require('./multiply').multiply;
const divide = require('./divide').divide;
const InvalidArgumentsCountError = require('./InvalidArgumentsCountError').InvalidArgumentsCountError;

const operation = args.operation;

if (!operation) {
    console.error("Required operation: provide operation as '--operation <operation_name> <operands_list_seperated_by_space>'\n" +
    "operation_name can be any of these four values: addition, subtraction, multiplication and division\n" +
    "Example: node app.js --operation addition 1 2 3");
} else {
    const operands = args._;
    let result;

    try {
        switch(operation) {
            case "addition":
                result = add(operands);
                break;
            case "subtraction":
                checkOnlyTwoOperandsExist(operands);
                result = subtract(operands);
                break;
            case "multiplication":
                result = multiply(operands);
                break;
            case "division":
                checkOnlyTwoOperandsExist(operands);
                result = divide(operands);
                break;
            default:
                console.error("Unsupported Operation");
                return;
        }
        console.log("Result: " + result);
    } catch(err) {
        console.log(err.message);
    }
}

function checkOnlyTwoOperandsExist(operands) {
    if (operands.length < 2) {
        throw new InvalidArgumentsCountError("Few Arguments to perform the operation.\n" + 
        "Valid argument count for subtraction and division: 2");
    } else if (operands.length > 2) {
        throw new InvalidArgumentsCountError("Too many arguments to perform the operation.\n" + 
        "Valid argument count for subtraction and division: 2");
    }
}
