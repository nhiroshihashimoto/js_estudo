(()=>{
    'use strict';
    // ------------ Debugger ------------

    function sum(){
        //Criar um breakpoint
        //debugger;
        return Array.prototype.reduce.call(arguments, function( accumulated, item ){
            return accumulated + item;
        });
    }
    //console.log( sum( 1, 21, 32, 4) );

    // ------------ Tempo de execução ------------
    //console.time(string)
    //console.timeEnd(string)

    console.time ('Calculando tempo do for');

    for( var i = 0; i < 100; i++ ){
        console.log( 'Tempo de execução' );
    }

    console.timeEnd( 'Calculando tempo do for' );

    // ------------ Visualizar array ------------
    //console.table
    
    var arr = [
        { item: 'Arroz', price: 'R$ 10' },
        { item: 'Feijão', price: 'R$ 20' },
        { item: 'Macarrão', price: 'R$ 12' },
        { item: 'Carne', price: 'R$ 30' }
    ];
    console.table( arr );

})();