(()=>{
    'use strict';

    // ------------------------  Prototype  ------------------------
    //Funções e propriedades de uma função ou objeto
    //Usado para criar de bibliotecas
        function MyFunction( name, lastName ){
            this.name = name;
            this.lastName = lastName;
            //this.age = 25; Esse valor nunca poderá ser sobrescrito


            //Função Estática
            this.getFirstName = function getFirstName() {
                return this.name;
            };
        };

        //Função de Instância
        MyFunction.prototype.getFullName = function getFullName() {
            return this.name + ' ' + this.lastName;
        };

        //Adicionar prototype
        MyFunction.prototype.age = 27;
        
        //Sobrescrever prototype
        MyFunction.prototype.age = 20;

        //Instânciamento
        var pessoa = new MyFunction( 'Hyde', 'Hashimoto' );

        //Tentativa de sobrescrição da função estática
        MyFunction.getFirstName = function getFirstName(param) {
            return this.param;
        };

        console.log( 'Função Modular: ', pessoa.getFullName(), pessoa.age );
        console.log( 'Função Estática: ', pessoa.getFirstName('teste') );

    // ------------------------  Array-Like para array  ------------------------
    //Array.prototype
    //Array.prototype.forEach
    //Array.prototype.every
    //Array.prototype.some
    //Array.prototype.map
    //Array.prototype.filter
    //Array.prototype.reduce
    
    //arguments == Array-Like
    //documents.querySelectorsAll == Array-Like

    function arrayLikeToArray(){
        Array.prototype.forEach.call(arguments, function( item, index ){
            console.log( item );
        });
    }

    //arrayLikeToArray( 1, 2, 3, 4, 5, 6, 7, 8, 9 );

    //Somar Array-Like
    function sum(){
        return Array.prototype.reduce.call( arguments,
            function( accumulated, actual ){
                return +accumulated + Number(actual);
            }
        );
    }

    console.log( 'Soma de Argumentos:', sum( 1, 2, 3, 4) ); //Soma de Argumentos: 10

    //Remove o que não é número e retorna array numérico
    function justNumbers( entry ){
        return entry.replace( /\D+/g, ',' ).split( ',' );
    }

    var entrada = '1 4 asd 2, %3 @ K *() 2';
    var numbers = justNumbers( entrada );

    console.log( 'Soma Array-Like:', sum.apply( sum, numbers ) ); //Soma Array-Like: 12

})();