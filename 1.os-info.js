const os = require('node:os')
console.log('Informacion del sistema operativo:')
console.log('_')

console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus()) // <-- vamos a poder escalar procesos en node 
// os nos va a dar info de nuestro sistema operativo
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60)