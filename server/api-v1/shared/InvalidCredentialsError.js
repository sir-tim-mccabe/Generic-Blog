class InvalidCredentialsError extends Error {
    constructor() {
        super('Invalid credentials');
        this.name = 'InvalidCredentialsError';
    }
}

module.exports = InvalidCredentialsError;
