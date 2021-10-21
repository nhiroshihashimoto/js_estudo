// -----------------  STRING OBJ ----------------
'string'.length; //6

// -----------------  .charAt(index)  ----------------
'String'.charAt(0); // 'S'
'String'.charAt(10); // ''
'String'[0] // 'S'
// -----------  .indexOf(string [,start])  -------------
'String'.indexOf('ng') // 4
// -----------  .replace(string, newString)  -------------
var strang = 'String'.replace('i', 'a') // strang === 'strang'
// -----------  .slice(start [,end])  -------------
strang.slice(2,6); // 'rang'; strang === 'strang'
// -----------  .substring(start [,end])  -------------
strang.substring(6,2); // 'rang'; strang === 'strang' tanto faz a ordem do parametro
// -----------  .split(separator [,limit])  -------------
strang.split();// ['rang']; strang === 'strang'
strang.split('a');// [ 'r','ng']; strang === 'strang'

// -----------  Substituir Caracteres  -------------
var frase2 = 'Esse é um incrível teste de substituição de caracteres.'
var fraseSubstituida = frase2.split('i').join('o');
// -----------  .toLowerCase() minúsculo  -------------
'String'.toLowerCase(); //'string'
// -----------  .toUpperCase() maiúsculo  -------------
'String'.toUpperCase(); //'STRING'
// -----------  Deixar primeira maiúscula  -------------
var pMaiuscula = 'string';
pMaiuscula.charAt(0).toUpperCase() + pMaiuscula.slice(1); //'String'

function toName(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
}

/*
Array
*splice ~Remove do array principal
slice ~Copia do array
join ~Array para String + caractere

String
split ~String para array dividindo pelo parametro
slice ~Copia parte da string
replace ~Substitui primeiro caractere
replaceAll ~Substitui todos os caracteres
*/