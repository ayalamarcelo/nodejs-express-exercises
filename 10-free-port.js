const net = require("node:net");
// net es un módulo nos va a permitir hacer conexiones con el protocolo `tcp`
// es más rápido y nos va a permitir preguntar si ese servidor está ocupado

function findAvailablePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.listen(desiredPort, () => {
        const { port } = server.address()
        server.close(() => {
            resolve(port)
        })
    })
    server.on('error', (err) => {
        if(err.code === 'EADDRINUSE') {
            findAvailablePort(0).then(port => resolve(port))
        } else {
            reject(err)
        }
    })
  })
}
module.exports = { findAvailablePort };
