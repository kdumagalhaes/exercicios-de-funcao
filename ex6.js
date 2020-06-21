function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial + (capitalInicial * (taxaDeJuros / 100) * tempoDeAplicacao)
}

function jurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial * (1 + (taxaDeJuros / 100)) ** tempoDeAplicacao
}

console.log(jurosSimples(2000, 10, 2))
console.log(jurosCompostos(2000, 10, 2))
