const path = require('path')


// unir rutas con path.join 
// `./content/subfolder/test.txt` // X esto esta prohibido
// -> unix /
// -> windows \


// barra separadora de carpetas segun SO
console.log(path.sep) // nos va a decir como son las separaciones de la ruta en nuestro sistema operativo
// por eso existe el path, con el vas a poder unir rutas

// unir rutas con path.join

const filePath = path.join('./content', 'subfolder', 'test.txt')
// `/content/subfolder/test.txt` en linux
// le pasas cada parte de la ruta

console.log(filePath)

// de una ruta completa vas a conseguir el nombre del fichero

// el basename te da el nombre del fichero
const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)

// quiero el nombre del fichero

const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt') // quita el .txt
console.log(filename)

// tendras el nombre del fichero sin la extension

const extension = path.extname('image.jpg')
console.log(extension)