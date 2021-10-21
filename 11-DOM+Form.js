((win,document)=>{
    'use strict';

    var $inputUsername = document.querySelector( 'input[type="text"]' );
    var $inputEmail = document.querySelector( 'input[type="email"]' );
    var $inputMessage = document.querySelector( 'textarea' );
    var $button = document.querySelector( 'button' );

    $button.addEventListener( 'click', (event) => {
        event.preventDefault();

        if( !$inputUsername.value )
            return alert( 'Preencha o nome do usuário!' );
        if( !$inputEmail.value )
            return alert( 'Preencha o e-mail!' );
        if( !isValidEmail( $inputEmail.value ))
            return alert( 'Preencha com um e-mail válido!' );
        if( !$inputMessage.value )
            return alert( 'Preencha a mensagem!' );
        if( confirm( 'Tem certeza que deseja enviar o formulário?' ) )
            return alert( 'Enviado com sucesso!' );
        return alert( 'Não enviado' );
    }, false );

    function isValidEmail(email){
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
    }

})(window, document);