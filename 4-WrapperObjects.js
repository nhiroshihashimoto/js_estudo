// -------------------  Wrapper Objects  -------------------

var nome = 'hyde';
nome.length;
var nome = new String('Hyde');
//nome returns [String: 'Hyde']
nome.valueOf();
//nome returns ['Hyde']

var nome = String(30); // returns '30'
var idade = Number('150'); // returns 150
var verdadeiro = Boolean(0) // returns false