function isValidEmail(email){
    const emailRegex = /[a-zA-Z0-9]+@gmail\.com/;
    return emailRegex.test(email);
}

module.exports = isValidEmail;