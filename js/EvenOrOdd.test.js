const {EvenOrOdd, numCheck} = require('./EvenOrOdd');

describe('Check if number Even or Odd', () => {
    test('Check if number is Even', () => {
        expect(EvenOrOdd(8)).toBe("Even");
    });

    test('Check if number is Odd', ()=>{
        expect(EvenOrOdd(5)).toBe("Odd");
    });
});

describe('if number is Zero or Non Zero', () =>{
    test('if number is Zero', ()=>{
        expect(numCheck(0)).toBe("Zero");
    });

    test('if number is Non Zero', ()=>{
        expect(numCheck(1)).toBe("Non Zero");
    });
});