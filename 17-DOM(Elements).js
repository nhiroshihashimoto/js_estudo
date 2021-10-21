((window,document)=>{
    $box = document.querySelector('[data-js="caixaEvent"]');

    //children retorna os elementos html filhos
    //children não é padronizada, porém é muito utilizada e é mais cômodo para trabalhar
    $box.children

    //firstElementChild retorna o primeiro elemento filho
    $box.firstElementChild

    //lastElementChild retorna o último elemento filho
    $box.lastElementChild

    //nextElementSibling retorna o elemento irmão
    $box.nextElementSibling
    $box.previousElementSibling

    //childElementCount retorna a quantidade de filhos que o elemento possui
    $box.childElementCount
    //ou
    $box.children.length


    // ------ Métodos do DOM ------
    // true or falsy
    $box.hasAttribute('id');
    $box.hasAttributes();

    // Inserir um filho no elemento
    //$box.appendChild(child);

    // Modificar a localização do nó
    //$box.insertBefore( node, beforeWho );

    // Clona o nó.
    // O parâmetro é se você quer copiar também o conteúdo. (true or false)
    $box.cloneNode(true);

    // Retorna se possui nós dentro
    $box.hasChildNodes();

    // removeChild(child) remove filho
    //.replaceChild(new,old) substitui filho
    //document.createTextNode('texto') cria um nó de texto -> add com .appendChild
    //document.createElement(tagname) cria um elemento de tag -> add com .appendChild

    // --------------- Atributos ---------------
    //.id (retorna ou atribui id)
    //.className (retorna ou atribui nome da classe)

    //.getAttribute(Attr)
    // Retorna qualquer atributo com nome
    // ex: .getAttribute('data-js')
    
    //.setAttribute(Attr, value)

})(window,document);