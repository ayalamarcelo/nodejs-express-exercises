const fs = require('node:fs')

console.log('Leyendo el primer archivo...');
const text = fs.readFileSync('./archivo.txt', 'utf-8', (err, text) => { // <-- ejecutas este callback
  console.log('primer texto: ', text)
})

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('segundo texto: ', text)
})