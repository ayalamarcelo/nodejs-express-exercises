const fs = require('node:fs') // a partir de node 16, se recomienda poner node:

const stats = fs.statSync('./archivo.txt')

// Esto es síncrono
console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlance simbólico
    stats.size // tamaño en bytes
)

// Con esto podemos recuperar si es un archivo, si es un directorio