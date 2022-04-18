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

function validRomano(algarismoRomano) {
   
    if(algarismoRomano.length < 4 ) return;
     
    const arr = algarismoRomano.split('');
     acumulador = 0
    arr.reduce((anterior,atual)=>{
        if(anterior === atual) acumulador++;

        return atual
      
    })
      if(acumulador === 3) throw new Error('invalid number');

    
}
function converte(algarismoRomano) {
    let retornoArabico = 0;
    let size = algarismoRomano.length;
    let algarismoAnterios = 0
      validRomano(algarismoRomano)

    for(i = 0; i < size; i++) {
        let algarismoAtual =   romanNumbers.get(algarismoRomano.charAt(i).toUpperCase())

               if( algarismoAtual <= algarismoAnterios || algarismoAnterios == 0){
                    retornoArabico += algarismoAtual;
               }else{
                   retornoArabico =  algarismoAtual - retornoArabico
               }
                 
       algarismoAnterios = algarismoAtual  
    }    
    return retornoArabico;
}

module.exports = {
     converte
}