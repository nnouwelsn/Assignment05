/*eslint-env browser*/

var $ = function () {
    'use strict';
    document.getElementById(id);
};

function init() {
    'use strict';
    $('one').addEventListener('click', enter);
    $('two').addEventListener('click', enter);
    $('three').addEventListener('click', enter);
    $('four').addEventListener('click', enter);
    $('five').addEventListener('click', enter);
    $('six').addEventListener('click', enter);
    $('seven').addEventListener('click', enter);
    $('eight').addEventListener('click', enter);
    $('nine').addEventListener('click', enter);
    $('zero').addEventListener('click', enter);
    $('add').addEventListener('click', enter);
    $('subtract').addEventListener('click', enter);
    $('multiply').addEventListener('click', enter);
    $('divide').addEventListener('click', enter);
    $('period').addEventListener('click', enter);
}

function enter(val) {
    var val = init.value;
  $('result').value += val;
}

function equal() {
    $('equal').value;
    calculate();
}
    
function calculate() {
        var newVal = $('result').value;
        eval('newVal' + enter);
    }

window.addEventListener('load', init);
