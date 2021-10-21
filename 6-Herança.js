// -------------------  Herança  -------------------
var filho = Object.create(pessoa1);
filho.propriedadeDoFilho = 0;
(() => {
    for(let prop in filho){
        filho.hasOwnProperty(prop) ? console.log(prop, filho[prop]) : null;
    }
})();

// ------  Object.keys (Propriedades do Obj)  -------
Object.keys(filho).length //Contar quantas prop o obj possui

// -------  Verificar Herança (cima pra baixo) ------
var neto = Object.create(filho);
pessoa1.isPrototypeOf(filho); //true
pessoa1.isPrototypeOf(neto); //true