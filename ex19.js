const snackPrice = (code, quantity) => {
    switch (code) {
        case 100:
            return quantity * 3
        case 200:
            return quantity * 4
        case 300: 
            return quantity * 5.50
        case 400:
            return quantity * 7.50
        case 500:
            return quantity * 3.50
        case 600:
            return quantity * 2.80
        default:
            return "Invalid code."                     
    }
}

console.log(snackPrice(500, 2))
console.log(snackPrice(990, 2))
