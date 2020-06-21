function triangle(a, b, c) {
    if (a === b && b === c) {
        return 'Equilátero'
    } else if(a === b || b === c || a === c ) {
        return 'Isósceles'
    }
    return 'Escaleno'
}