//Arrow Function
let arrowFunction = function(entrada){
    return entrada
};
arrowFunction = (entrada) => entrada;

// -------------------  ARGUMENTS  -------------------
function myArguments1(arg1,arg2){
    return arguments;
}
myArguments1(1,2); //[1,2]

//Ex 2
function myArguments1(){
    return arguments;
}
myArguments1(1,2); //[1,2]

//Ex 3
function myArguments1(arg1,arg2){
    return arguments[0];
}
myArguments1(1,2); //1

// -------------  Encadeamento de métodos  -------------
pessoa1.addIdade = function addIdade(){
    this.idade += arguments[0];
    return this;
}
console.log(pessoa1.nome + ' tem ' + pessoa1.addIdade(2).idade + ' anos.' )

// -------------  Função com objeto  -------------
function getMonthNumber(monthName){
    var months = {
        janeiro: '01',
        fevereiro: '02',
        'março': '03',
        abril: '04',
        maio: '05',
        junho: '06',
        julho: '07',
        agosto: '08',
        setembro: '09',
        outubro: '10',
        novembro: '11',
        dezembro: '12'
    }
    return months[ monthName ];
}
var mes = getMonthNumber('abril');

// -------------------  Calculadora  -------------------

function calculator( operator ){
    return function( number1, number2 ){
        var result;
        switch(operator){
            case '+' :
                result = number1 + number2;
                break;
            case '-' :
                result = number1 - number2;
                break;
            case '*' :
                result = number1 * number2;
                break;
            case '/' :
                result = number1 / number2;
                break;
            case '%' :
                result = number1 % number2;
                break;
            default :
                return 'Operador inválido.';
        }
        return `O resultado de ${number1} ${operator} ${number2} é ${result}.`
    }
}

const sum = calculator('+');
const sub = calculator('-');
const mult = calculator('*');
const div = calculator('/');
const mod = calculator('%');
console.log(mult(3,5));

// -------------------  Callback Function  -------------------

function calculator2(num1,num2){
    return function(callback){
        return callback(num1,num2);
    }
}
var sum2 = calculator2(10,3);
sum2( function(num1,num2){
    return num1 + num2;
} );

// -------------------  Obj + Métodos  -------------------

const calculator3 = {
    '+' : function( x, y ){ return x + y },
    '-' : function( x, y ){ return x - y },
    '*' : function( x, y ){ return x * y },
    '/' : function( x, y ){ return x / y },
    '%' : function( x, y ){ return x % y }
}

function isOperatorValid( operator ){
    return !!calculator3[operator];
}

// ------------------------  IIFE  ------------------------
//(Função auto executável)
let a = (function (){
    return 'teste';
})();

//Continue + IIFE + Arrow Function
/*
(() => {
    for(let i = 0; i < 10; i++){
        if( i === 4){
            continue;
        }
        console.log(i);
    }
})();
*/

//Operador Ternário + IIFE + Arrow Function
/*
(() => {
    for(let i = 0; i < 10; i++){
    i == 5 ? null : console.log(i);
    }
})();
*/

// ------------------------  Métodos  ------------------------

function myLength( a, b, c ){
    console.log( 'Mostra quantos parâmetros a função pode receber.' );
}
//console.log( myLength.length );

function tostring( a, b, c ){
    console.log( 'Mostra o código da função.' );
}

tostring.toString();

function metodoCall( a, b, c ){
    return 'Retorno da função metCall';
}

metodoCall.call();

// ------------------------  Call(this)  ------------------------
//função.call(this, arg1, arg2..) A função se apossa do objeto passado pelo parâmetro
// A chamada "this" da função passa a se referir do parâmetro passado.

function myFunction( a, b, c, d ){
    console.log( this.prop, a, b, c, d )
}

var objeto1 = {
    prop : 'Call(this) + args'
};
var objeto2 = {
    prop : 'Apply(this) + array'
};

myFunction.call( objeto1, 1, 2, 3, 4 ); //Call(this) + args 1 2 3 4

( () => {

var pessoa1 = {
    name: 'Nome',
    lastName: 'Sobrenome'
}
var pessoa2 = {
    name: 'Nome2',
    lastName: 'Sobrenome2'
}

function getFullName(){
    return this.name + ' ' + this.lastName;
}

//console.log( getFullName.call( pessoa1 ), getFullName.call( pessoa2 ) );

})();



// ------------------------  Apply( this, [ ag1, ag2...])  ------------------------
//função.apply(this, [arg1, arg2..])

var arr = [ 5, 6, 7, 8 ];
myFunction.apply ( objeto2, arr ); //Apply(this) + array 5 6 7 8