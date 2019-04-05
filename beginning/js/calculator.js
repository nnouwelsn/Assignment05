/*eslint-env browser*/

window.addEventListener('load', init);

function init() {
    'use strict';
    var btn;
    

    document.getElementById(btn).addEventListener('click', enter)

 }

    }
};
var $ = function () {
    'use strict';
    document.getElementById(id);
};

function enter(val) {
    document.getElementById('result').value=val;
    document.getElementById('result') += val;
    
};
 function equal(){
 enter(eval(document.getElementById('result').value));
 };