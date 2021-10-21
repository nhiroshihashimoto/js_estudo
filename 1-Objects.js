//Criação de Objeto Literal
let objeto = {
    nome: undefined,
    sobrenome: undefined,
    idade: undefined,
    aprovado:undefined
};

//Factory Function
function criarPessoa(nome, sobrenome, idade, membros){
    //Atribuição em Objeto
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        membros: {
            quantidade: membros
        },
        vivo: true,
        mudarEstado: function(entrada) {
            this.vivo = !this.vivo
            console.log('Estado da pessoa modificada com sucesso.')
        },
        'descricao': 'saída'
    };
};
let pessoa1 = criarPessoa('Hyde','Hashimoto', 27, 4);
let pessoa2 = criarPessoa('Hidemitsu','Hashimoto', 30, 4);

//Constructor Functions
function Animal(nome, tipo, membros){
    this.nome = nome;
    this.tipo = tipo;
    this.membros = membros;
    this.vivo = true;
    this.mudarEstado = function mudarEstado(){
        this.vivo = !this.vivo;
        console.log('Estado do Animal modificado com sucesso.');
    }
};
let animal = new Animal('Animal','Cachorro', 4);

//Classe
class Alienigena{
    constructor(nome, membros){
        this.nome = nome,
        this.membros = membros,
        this.vivo = true
    }
    mudarEstado(entrada){
        this.vivo = !this.vivo
        console.log('Estado do Alien modificado com sucesso.');
    }
};
let alien = new Alienigena('Sem nome', 6);

// -----------------  DELETE  ----------------
//Só deleta propriedade de obj
//Ex: console.log(delete pessoa1.nome)      true