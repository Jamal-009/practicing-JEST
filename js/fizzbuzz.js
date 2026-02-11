function FizzBuzz(numbers){
    let result = []

    for(number of numbers){
        if (number % 15 === 0){
            result.push('FizzBuzz')
        } else if(number % 5 === 0){
            result.push('Buzz')
        } else if(number % 3 === 0){
            result.push('Fizz')
        } else{
            result.push(number)
        }
    }

    return result.join(', ')
}

module.exports = FizzBuzz;