function multiply(operands) {
    let product = 1;
    operands.forEach(element => {
        product *= element;
    });
    return product;
}

module.exports = {
    multiply
}
