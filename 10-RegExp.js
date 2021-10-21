(function (){
// -----------  Expressão regular  -------------
// Testar: https://regex101.com/
//g = global
//i = ignore case
//m = multiline

//     Termos
// \w : caracteres alfanuméricos e _
// \d : números (digits)
// \s : caracteres em branco
// \n : quebra de linha
// \t : tabulação
// . : todos os caracteres, menos quebra de linha
// * : quaisquer caracteres
// ----------- Negação -----------
// [^abc] : lista de negação
// ^a : ^ é início de linha
// a$ : $ é final de linha
// \W : negação de caracteres alfanuméricos e _
// \D : negação de números (digits)
// \S : negação de caracteres em branco
// ----------- Repetidor de Intervalo -----------
// \d{2,4} : {n,m} mínimo n e máximo m
// \d{2,} : {n,} mínimo n
// \d{2} : {n} exatamente n vezes
// \d? : ? opcional - zero ou uma ocorrência do item anterior
// s+ : + pelo menos 1 ou mais o ocorrências do item anterior
// +? : captura não gulosa (não vai até o final)
// s* : * zero ou mais ocorrências do item anterior
// ju(?:n|l)ho : não faz a captura
// \1 ou \2 ... : referencia a captura respectiva

// \ : escapar caracter

//http?:\/\/\w+\.\w+\.\w{3}\.\w{2} "Validar" site
//http://www.google.com.br

// /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test() "Validar email"
//email@email.com.br




var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 123'


var regex = /m/g;
var regex2 = new RegExp('\\d');
RegExp();

regex2.test(text);

text.match(/m/g); //17['m' ..]
text.match(/m|a/g); //46['m','a' ..]
text.match(/[ma]/g); //46['m','a' ..]procurar por cada caractere

text.match(/\w/g);//Array[369]
text.match(/[a-z]/g);//Array[365]
text.match(/[A-Z]/g);//Array[4]

text.match(/ullamco/);//["ullamco", index: 175 ..]
text.match(/não encontrado/);//null

text.match(/\d/g);//["1", "2", "3"]
text.match(/[0-9]/g);//["1", "2", "3"]
text.match(/\d\d/);//["12", index: 446 ..]

text.replace(/d/g,'D');
text.replace(/(d)/g,'--$1--'); //$1 é o primeiro parâmetro
text.replace(/(d)(e)/g,'$1$1');
text.replace(/(d)(e)/g,'--$&'); //$& Substitui todos os parâmetros juntos
text.replace(/(d)(e)/g, (ambos, d, e) =>{ return (d + e).toUpperCase()}); //RegExp aceita funções

text.search(/\./); //Retorna posição do item encontrado

var queryString = '?s=lala&b=bebe&c=cce';
queryString.replace(/[?&](\w+)=(\w+)/g, (regex, match1, match2) => {
    //console.log(match1,match2);
    //console.log('Key: ' + match1, 'Value: ' + match2);
});

//Limpando CPF com RegExp
function cleanCPF( cpf ){
    //cpf.split(/\D/).join('');
    return cpf.replace( /\D/g, ''); 
}

var cpfs = ['049-21.4 342 1-1', '210.458.522-05', '532 500 794 - 22', '101.123-132x32'];
cpfs.forEach((cpf) =>{
    //console.log(cleanCPF(cpf));
});

var cpfAdjusted = [];
cpfs.forEach( (cpf) =>{
    cpfAdjusted.push(cleanCPF(cpf).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4'));
});

// Pegar conteúdo de tags /<(\w+)>([^<]+)<\/\w+>/
// Ou /<(\w+)>.+</(\1)>/
var htmlTags = '<h1>Título da página</h2><p>Este é um parágrafo</p><footer>Rodapé</footer>';
})();