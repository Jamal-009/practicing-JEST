// updated to multiple tests

function EvenOrOdd(num){
    if(num % 2 === 0)
    {
        return "Even"
    } else {
        return "Odd"
    }
}

function numCheck(num){
    if(num === 0)
    {
        return "Zero";
    } else {
        return "Non Zero"
    }
}

module.exports = {
    EvenOrOdd,
    numCheck
};