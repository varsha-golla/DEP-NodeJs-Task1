class InvalidArgumentsCountError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
}

module.exports = {
    InvalidArgumentsCountError
}