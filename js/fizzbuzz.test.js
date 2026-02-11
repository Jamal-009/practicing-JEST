const FizzBuzz = require('./fizzbuzz')

describe('FizzBuzz', () =>{
    test('[3] should result in Fizz', ()=>{
        expect(FizzBuzz([3])).toBe('Fizz');
    });

    test('[5] should result in Buzz', ()=>{
        expect(FizzBuzz([5])).toBe("Buzz");
    });

    test('[15] should result in FizzBuzz', ()=>{
        expect(FizzBuzz([15])).toBe("FizzBuzz");
    });

    test('[1, 2, 3] should result in "1, 2, Fizz"', ()=>{
        expect(FizzBuzz([3])).toBe("Fizz");
    });
});