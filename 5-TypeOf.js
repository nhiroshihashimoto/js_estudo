// -------------------  Teste de valores  -------------------
function ehNumero(num){
    if(isNaN(Number(num))){
        return 'Não é um número.';
    }
    return 'É um número.';
}

function subtract(num1, num2){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 - num2;
    }
    return 'Entrada inválida';
}

//typeof = string, number, boolean
typeof undefined; // 'undefined'
typeof function() {}; // 'function'
typeof true; // 'boolean'
typeof 10; // 'number'
typeof NaN; // 'number'
typeof isNaN(12); // 'function'
typeof 'texto'; // 'string
typeof {}; // 'object'
typeof []; // 'object' ~array
typeof null; // 'object' ~Erro na implementação (Não usar)

// !! Mostra se é Trufhy ou Falsy (Booleano)

// -------------------  Trufhy  -------------------
// function (){}
// true
// {}
// []
// 42
// "foo"
// new Date()
// -42
// 3.14
// -3.14
// Infinity
// -Infinity

// -------------------  Falsy  -------------------
// false
// null
// undefined
// 0
// NaN
// ''