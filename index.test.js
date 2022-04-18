const { expect } = require('@jest/globals')
const index = require('./index')

test('Deve entender o símbolo I', () => {
    const numero = index.converte('I')
    expect(numero).toEqual(1);
})

test('Deve entender o símbolo I', () => {
    const numero = index.converte('i')
    expect(numero).toEqual(1);
})


//Dois símbolos iguaiszzzzz
test('Deve entender o símbolo II', () => {
    const numero = index.converte('II')
    expect(numero).toEqual(2);
})


//Três símbolos iguais
test('Deve entender o símbolo III', () => {
    const numero = index.converte('III')
    expect(numero).toEqual(3);
})
//Dois símbolos diferentes do maior para o menor
test('Deve entender o símbolo IV', () => {
    const numero = index.converte('IV')
    expect(numero).toEqual(4);
})
//Quatro símbolos dois a dois
test('Deve entender o símbolo XXII', () => {
    const numero = index.converte('XXII')
    expect(numero).toEqual(22);

});

test('Não Deve entender o símbolo IIII', () => {
    expect(()=>index.converte('IIII')).toThrow();

});

//Bora bora!

//...