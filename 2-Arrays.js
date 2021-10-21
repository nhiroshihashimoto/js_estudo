// -------------------  ARRAY  -------------------

//Criação de Array
let familia = [pessoa1, pessoa2];
let familia2 = [animal, alien];

//Adicionar obj no início do Array
familia.unshift(pessoa2);
//Adicionar obj no meio do Array
familia.splice(2,0,pessoa1); //(Índice, Deletar, Obj)
//Adicionar obj no final do Array
familia.push(pessoa2);

//Verificar se possui obj no array
familia.includes(pessoa1);
//Encontrar propriedade dentro do array
familia.find(prop => prop.nome === 'Hyde'); //true

// -------------------  indexOf  -------------------

//Retorna index do array que contém o obj ou numero (retorna index ou -1) (item, índice)
familia.indexOf(pessoa1, 0); //return 1

//Busca item pelo final (item, índice) A busca corre para esquerda do índice inserido
familia.lastIndexOf(pessoa1, 0); //return 1

//Remover obj no início do Array
familia.shift();
//Remover obj no meio do Array
familia.splice(1,1);
//Remover obj no fim do Array
var removido = familia.pop();

// -------------------  Ordenar  -------------------

//Inverter ordem no array
familia.reverse();
//Ordenar por ordem alfabética
familia.sort();

//Combinar arrays
let combinado = familia.concat(familia2);

// -------------------  isArray  -------------------

Array.isArray(combinado); //true

//Combinar arrays (SPREAD)
combinado = [...familia,...familia2]; //Combinar 2 arrays ou inserir no meio
let meio = [1, 2, ...familia, 3, 4];
//Clonar array (SPREAD)
const clone = [...familia];

//Copiar parte do array
let dividido = combinado.slice(0,2); //Index, Index -1
dividido = combinado.slice(2); //Index até o final

//Passar endereço vazio para o Array
//familia = [];

//Esvaziar Array
//familia.length = 0;


// -------------------  FOR ARRAY  -------------------

//for
for(obj of familia){
    //console.log(obj);
}
//forEach
combinado.forEach((obj) => {console.log(obj)})

//for..in
for(let prop in familia){
    //console.log(prop, familia[prop].nome);
}
//for..in + loop
for(let prop in familia){
    for(let prop2 in familia[prop] ){
        //console.log(prop2, familia[prop][prop2]);
    }
}
//for..of
for(let prop of familia){
    //console.log(prop.nome);
}

// -------------  Every, Some, Map and Filter  --------------

//Verificar em todos os itens do array
var arr = [1,2,3,4,5,6];
var every = arr.every((item, index, array) => {
    return typeof item === 'number' //True
});

//Verificar se há no mínimo 1 true no array
var some = arr.some((item, index, array) => {
    return item < 5 //True
});

//Fazer uma cópia modificada ou percorrer em todo Array
var map = arr.map((item, index, array) => {
    return {index: index, item: (item + 1)} //Obj
});
//Filtrar
var filter = arr.filter((item, index, array) => {
    return item > 2 //Obj
});

//Exemplo mais complexo
map = arr.map((item, index, array) => {
    return {index: index, item: (item + 1)} //Obj
}).filter((item, index, array) => {
    return item > 3 //Obj
});

// -------------------  REDUCE  -------------------
//Sempre passa por todos os itens do Array
var reduce = arr.reduce((acumulado, atual, index, array) => {
    return acumulado = acumulado * 2 + atual; //184
}, 1);

//Reduce Right (direita p esquerda)
var reduceRight = arr.reduceRight((acumulado, atual, index, array) => {
    return acumulado = acumulado * 2 + atual; //385
}, 1);


//Procurar na propriedade do objeto usando string (mais lento)
familia[0]['nome'];
familia[0]['descricao'];

// -------------------  Slug  -------------------

const frase = "Titulo da materia"
//Separar frase
const arrayFrase = frase.split(' '); // ["Titulo", "da", "materia"]
//Juntar e inserir caracteres para String
const resultado = arrayFrase.join('-');// "Titulo-da-materia"
//Array toString
const arrString = arrayFrase.toString();// "Titulo,da,materia"

//Separar caracteres para array
const separado = [...frase];

//console.log(familia.find((element) => { element === true}));

let juncao = [pessoa1, pessoa2];