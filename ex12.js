const factorialNumber = number => {
    if (number <= 0) {
        return 1
    } else {
        return number * factorialNumber(number - 1)
    }
}

console.log(factorialNumber(10))