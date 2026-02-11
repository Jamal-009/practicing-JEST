const sum = require('./sum')
test('Adds two numbers', () =>{
    expect(sum(5, 8)).toBe(13)
})