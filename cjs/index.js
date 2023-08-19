console.log('Hola, mundo')
// Pasamos como argumento el archivo que queremos ejecutar
// node index.js

// CommonJS require module
const { sum } = require('./sum')

console.log(sum(1, 2))