// console.log(arguments);
// console.log('------------------------------------------------------------');
// console.log(require('module').wrapper);

// module.exports
console.log('---- module.exports -----');
const C = require('./test-module-1');

const calc1 = new C();
console.log(calc1.add(2, 5));
console.log('---- exports -----');
// exports

const { add, multiply, divide } = require('./test-module-2');
console.log(add(2, 8));

// caching
console.log('------ caching -----');

require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
