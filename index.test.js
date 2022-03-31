const { expect } = require('@jest/globals')
const index = require('./index')

test('Deve entender o símbolo I', () => {
    const numero = index.converte("I")
    expect(numero).toEqual(1)
})

//Dois símbolos iguais

//Três símbolos iguais

//Dois símbolos diferentes do maior para o menor

//Quatro símbolos dois a dois

//...