const checkFruit = fruit => {
    switch (fruit) {
        case 'maçã':
            return "Não vendemos esta fruta aqui."
        case 'kiwi':
            return "Estamos com escassez de kiwis."
        case 'melancia':
            return "Aqui está, são 3 reais o quilos."
        default:
            return "Que isso?";
    }
}

console.log(checkFruit('maçã'))
console.log(checkFruit('kiwi'))
console.log(checkFruit('melancia'))
console.log(checkFruit('papibaquigrafo'))

