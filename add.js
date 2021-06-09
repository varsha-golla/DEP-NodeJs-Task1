function add(operands) {
    let sum = 0;
    operands.forEach(element => {
        sum += element;
    });
    return sum;
}

module.exports = {
    add
}
