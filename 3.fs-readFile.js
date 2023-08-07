const fs = require('node:fs')
console.log('Leyendo el primer archivo...')

fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // acepta como 3er param un callback
// info de si ha habido un error
console.log('primer texto: ', text)
}) // <-- ejecutas este callback

console.log('--> Hacer cosas mientras lee el archivo...')
// aqui entra la asincronia en node.js (como simplificar p/hacerlo asincrono)
// el sistema clasico de node y como podemos transformarlo a promises
console.log('Leyendo el segundo archivo...')

fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
console.log('segundo texto: ', text)
})


// lo primero es utilizar otro metodo
// readFile es la forma asincrona de leer archivos
// mecanismos 'callbacks' funciones que se ejecutan cuando
// una tarea a terminado