## Node

Node es un entorno de ejecución de JS, esto quiere decir que es un sitio donde puedes utilizar Javascript. Significa que vamos a poder utilizarlo en el backend, en nuestra terminal, incluso en dispositivos.
Es unn entorno donde puedes utilizar JS sin ser navegador. Es asíncrono con "in" y "out", entrada y salida de datos. Lo importante es saber que su arquitectura esta orientada a eventos.
Cuando estamos utilizando Node.JS, estamos ejecutando nuestro javascript en el mismo motor que el de google chrome. Es el mismo motor, pero no es el mismo entorno.

## Eventos

Node.JS está orientado a eventos, es un modelo de programación en el que básicamente tiene un bucle en el que va manejando las solicitudes que le van llegando cada vez que tiene un evento. En lugar de esperar bloqueos, lo que hace es va ejecutando tareas, mientras espera respuesta de otras tareas que ha dejado por ahí.
Se aprovecha de la síncronia y cómo espera eventos para simular que puede hacer más de una cosa a la vez, pero no lo hace. Solo hace una cosa a la vez.

## Running Files

Vamos a poder usar node como en el navegador. En node Js no tenemos "window". El objeto global de window no existe, no tenemos una ventana donde estamos mostrando los datos. Si tenemos un objeto global, pero no es windows: 

`console.log(globalThis)`

# 24:33/ 2:18:30
