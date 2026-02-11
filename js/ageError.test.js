const ageCheck = require('./ageError')

describe('ageCheck', () => {
    test('return correct if age is greater than zero', ()=>{
        expect(ageCheck(47)).toBe("correct");
    });

    test('throw error if age is negative (or less than zero)', ()=> {
        expect(()=> ageCheck(-13)).toThrow("age can't be negative");
    });

    test('throw error if input is other than numbers', ()=> {
        expect(()=> ageCheck("abc")).toThrow("enter valid input");
    })
});