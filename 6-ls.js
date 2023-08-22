const fs = require('node:fs')

fs.readdir('.', (err, files) => {
    if(err) {
        console.error('Error al leer directorio: ', err)
        return;
    }

    files.forEach(file => {
        console.log(file)
    })
}) 

// lee el directorio

// en los callbacks el primer param siempre es error, para que no se nos olvide manejar el error
// eso nos obliga a pensar que el error esta ahi siempre esperando