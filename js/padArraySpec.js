// Write unit tests!
var p = require("./padArray");
var shallowEqualArrays = require('shallow-equal/arrays');


console.log(shallowEqualArrays(p.pad([1,2,3],5), [1,2,3, null, null]))
console.log(shallowEqualArrays(p.pad([1,2,3],5, 'apple'), [1,2,3,'apple', 'apple']))
console.log(shallowEqualArrays(p.pad([1,2,4,5,1], 2), [1,2,4,5,1]))