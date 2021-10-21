(() => {
    'use strict';

    var $buttons = document.querySelectorAll('button');

    //Style inline
    
    Array.prototype.forEach.call($buttons, function(item){
        item.style.width = '40px';
        item.style.height = '50px';
        item.style.backgroundColor = 'black';
    });

    Array.prototype.forEach.call($buttons, function(item){
        item.setAttribute('style', 'background-color: #6fb2d6');
    });

    //ClassList
    //add, remove, toggle, contains
    //toggle = botar/tirar

    Array.prototype.forEach.call($buttons, function(item){
        item.classList.add('button');
    });


})();