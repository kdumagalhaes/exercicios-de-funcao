function bhaskara(ax2, bx, c) {
    let results = []
    let delta = (bx ** 2) - (4 * ax2 *c)

    if(delta < 0) {
        return "Delta é negativo."
    }
    let value1 = (-bx + Math.sqrt(delta)) / 2 * ax2
    let value2 = (-bx - Math.sqrt(delta)) / 2 * ax2
    results.push(value1)
    results.push(value2)
    return results
}

console.log(bhaskara(2, 7, 9))
console.log(bhaskara(1, 3, 2))