const fs = require('node:fs') // a partir de Node 16, se recomienda poner node:
// fs significa file system
const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlance simbólico
    stats.size, // tamaño en bytes
)

// con esto podemos recuperar info del sistema de archivos