const verifyNumber = number => {
    if (number % 3 === 0) {
        return true
    } else {
        return false
    }
}

console.log(verifyNumber(9))