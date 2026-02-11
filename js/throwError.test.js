const divide = require('./throwError')

test('throws an error', () => {
    expect(()=> divide(6, 0)).toThrow('Division by zero is not allowed');
})