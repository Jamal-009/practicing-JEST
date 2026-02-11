const isValidEmail = require('./email')

describe('isValidEmail', () => {
    test('return false if Email is not valid', () =>{
        const email = "user123@gmail.net";
        const result = isValidEmail(email);
        expect(isValidEmail(email)).toBe('false')
    });

    test('return true if Email is valid', () => {
        const email = "user123@gmail.com";
        const result = isValidEmail(email);
        expect(isValidEmail(email)).toBe('true')
    })
})