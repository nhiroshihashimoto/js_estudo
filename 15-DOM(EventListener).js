(() => {
    'use strict';

    function on(element, event, callback){
        document.querySelector(element)
        .addEventListener(event, callback, false);
    }

    function off(element, event, callback){
        document.querySelector(element)
        .removeEventListener(event, callback, false);
    }

    //------------ Atrelação direta de função ao clicar ------------

    on('[data-js="EventListener"]','click', (event) =>{
        event.preventDefault();
        alert('Clicou no: Botão');
    });

    on('[data-js="caixaEvent"]','click', funcaoAlert);
    off('[data-js="caixaEvent"]','click', funcaoAlert);

    var $eventListener = document.querySelector('[data-js="EventListener"]');
    
    $eventListener.onclick = (event) => {
        event.preventDefault();
        alert('Atrelação única de evento');
    };

    function funcaoAlert(event){
        event.preventDefault();
        alert('Clicou no: ' + this.type);
    }


})();