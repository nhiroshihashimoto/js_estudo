((window,document)=>{
    $box = document.querySelector('[data-js="caixaEvent"]');

    //Busca usando nó ou lista de nós

    // parentNode retorna o pai
    $box.parentNode;
    // childNodes retorna os filhos em um arrayLike ( retorna as quebras de linha no html também )
    $box.childNodes;
    //firstNode retorna o primeiro filho encontrado ( retorna as quebras de linha no html também )
    $box.firstChild;
    //lastChild
    $box.lastChild;

    //nextSiglind retorna o próximo irmão
    $box.nextSibling;
    //previousSibling retorna o irmão anterior
    $box.previousSibling

    //.nodeType retorna um valor do tipo do nó
    // Document = 9
    // Element = 1
    // Text = 3
    // Comments = 8
    // documentFragment = 22
    $box.nodeType

    //.nodeValue é o conteúdo textual de Text e Comment
    $box.nodeValue

    //.nodeName retorna o tipo de tag html
    $box.nodeName

})(window,document);