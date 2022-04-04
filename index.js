const romanos = [
    'I',
    'II',
    'III',
    'IV',
]
/*
- I, 1 (um)
- V, 5 (cinco)
- X, 10 (dez)
- L, 50 (cinquenta)
- C, 100 (cem)
- D, 500 (quinhentos)
- M, 1000 (mil)
*/

const romanNumbers = [
    [1,'I'],
    [4,'IV'],
    [5, 'V'],
    [9, 'IX'],
    [10, 'X'],
    [40, 'XL']
]

function converte(algarismoRomano) {
    let retornoArabico = 0;
    for (let index = 0; index < romanNumbers.length; index++) {
        if (algarismoRomano.toUpperCase() == romanos[index]){
            retornoArabico = index + 1
        }
            
    }
    return retornoArabico;
}

module.exports = {
     converte
}