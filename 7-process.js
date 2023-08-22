// argumentos de entrada
// console.log(process.argv)

const { platform } = require("os")

// controlar el proceso y su salida
// process.exit(1)

// podemos controlar eventos del proceso
// process.on('exit', () => {

// limpiar los recursos
//})

// current working directory
console.log(process.cwd())

// desde donde estamos ejecutando el proceso

// platform
console.log(process.env.PEPITO) // variable de entorno

// process un objeto global con info y metodo para manejar el proceso y obtener informacion
