function ageCheck(age){
    if(age > 0){
        return "correct";
    } else if (age < 0){
        throw new Error("age can't be negative");
    } else {
        throw new Error("enter valid input")
    }
}

module.exports = ageCheck;