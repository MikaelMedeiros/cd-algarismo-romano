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

const romanNumbers =  new Map();

romanNumbers.set('I', 1);
romanNumbers.set('V', 5);
romanNumbers.set('X', 10);
romanNumbers.set('L', 50);
romanNumbers.set('C', 100);
romanNumbers.set('D', 500);
romanNumbers.set('M', 1000);



function converte(algarismoRomano) {
    let retornoArabico = 0;
    let size = algarismoRomano.length;
    
    for(i = 0; i < size; i++) {
        let algarismo = algarismoRomano.charAt(i)        
        retornoArabico = romanNumbers.get(algarismo.toUpperCase())         
    }    

    return retornoArabico;
}

module.exports = {
     converte
}