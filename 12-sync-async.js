//async
(( win, doc ) => {
    'use strict';

    console.log( 'Início' );

    //setTimeout( function, ms ); Inicia a função depois do tempo percorrido.
    setTimeout(() => {
        console.log( 'Executou setTimeout' );
    }, 1000);

    
    //setTimeout recursivo
    var counter = 0;
    var temp;
    function timer(){
        console.log( 'timer', counter++ );
        if( counter > 20 )
            return;
        temp = setTimeout( timer, 1000 );
    }
    //timer();

    //      ------ NÃO UTILIZAR setInterval ------
    //setInterval( function, ms ); Inicia a loop de função depois do tempo percorrido. 
    /*
    var counter2 = 0;
    setInterval( () => {
        console.log( 'Segundos com a página aberta: ' + (counter += 5) );

        //Sair da função async
        if ( counter2 > 10 )
            return;

    }, 5000);
    */


    /*
        setTimeout = Inicia quando a fila (Event Loop) chamar a função.
        setInterval = Força a execução após o tempo(ms) inserido. Só utilizar com um tempo muito grande.
    */


        // -----------------  Timer no HTML  ----------------

        var $timerCounter = doc.querySelector('[data-js="timer"]');
        var $resumeButton = doc.querySelector('[data-js="resume"]');
        var $stopButton = doc.querySelector('[data-js="stop"]');
        var $resetButton = doc.querySelector('[data-js="reset"]');

        $stopButton.disabled = true;
        $resetButton.disabled = true;

        var temporizador;

        var startText = $resumeButton.textContent;
        var countText = 'Contando...'
        var resumeText = 'Continuar';

        $resumeButton.addEventListener( 'click', resumeTimer, false);
        $stopButton.addEventListener( 'click', stopTimer, false);
        $resetButton.addEventListener( 'click', resetTimer, false);

        function resumeTimer(){
            $stopButton.disabled = false;
            $resetButton.disabled = false;
            $resumeButton.disabled = true;

            $resumeButton.textContent = countText;
            $timerCounter.textContent = +$timerCounter.textContent + 1;

            temporizador = setTimeout(resumeTimer, 1000);
        }

        function stopTimer(){
            $resumeButton.disabled = false;
            clearTimeout(temporizador);
            $resumeButton.textContent = resumeText;
        }


        function resetTimer(){
            $stopButton.disabled = true;
            $resetButton.disabled = true;
            stopTimer();
            $resumeButton.textContent = startText;
            $timerCounter.textContent = 0;
        }


    console.log( 'Fim' );
})( window, document );