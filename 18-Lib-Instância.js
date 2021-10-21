(()=>{
    'use strict';

    function Lib(elements){
        if(!(this instanceof Lib))
        return new Lib(elements);

        console.log(this);

        this.element = document.querySelectorAll(elements);
        if(this.element.length === 1 )
        return this.get();
    };

    Lib.prototype.get = function get(index){
        if(!index)
            return this.element[0];
        return this.element[index];
    };

})();