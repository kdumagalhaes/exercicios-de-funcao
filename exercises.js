//1
function sum(a, b) {
    console.log(a + b, a - b, a * b, a / b)
}

// sum(a, b)

//2
function triangle(a, b, c) {
    if (a === b && b === c) {
        return 'Equilátero'
    } else if(a === b || b === c || a === c ) {
        return 'Isósceles'
    }
    return 'Escaleno'
}

// console.log(triangle(a, b, c))

//3
function exponent(a, b) {
   result = a ** b
   return result
}

// console.log(exponent(a, b))

//4
function divider(a, b) {
    console.log(a / b)
    console.log(a % b)
}

// divider(a, b)

//5
function toReal(a) {
    convert = `R$${a.toFixed(2).toString().replace(".", ",")}`
    console.log(convert)
}

// toReal(0.1 + 0.2)

//6
