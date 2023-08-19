const os = require('node:os')

console.log('Información del sistema operativo')
console.log('-----------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus()) // <-- vamos a poder escalar procesos de Node
console.log('Memoria Libre', os.freemem() / 1024 / 1024)
console.log('Memoria Total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() / 60 /60)
