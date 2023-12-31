## Node

Node es un entorno de ejecución de JS, esto quiere decir que es un sitio donde puedes utilizar Javascript. Significa que vamos a poder utilizarlo en el backend, en nuestra terminal, incluso en dispositivos.
Es un entorno donde puedes utilizar JS sin ser navegador. Es asíncrono con "in" y "out", entrada y salida de datos. Lo importante es saber que su arquitectura esta orientada a eventos.
Cuando estamos utilizando Node.JS, estamos ejecutando nuestro javascript en el mismo motor que el de google chrome. Es el mismo motor, pero no es el mismo entorno.

## Eventos

Node.JS está orientado a eventos, es un modelo de programación en el que básicamente tiene un bucle en el que va manejando las solicitudes que le van llegando cada vez que tiene un evento. En lugar de esperar bloqueos, lo que hace es va ejecutando tareas, mientras espera respuesta de otras tareas que ha dejado por ahí.
Se aprovecha de la síncronia y cómo espera eventos para simular que puede hacer más de una cosa a la vez, pero no lo hace. Solo hace una cosa a la vez.

## Running Files

Vamos a poder usar node como en el navegador. En node Js no tenemos "window". El objeto global de window no existe, no tenemos una ventana donde estamos mostrando los datos. Si tenemos un objeto global, pero no es windows: 

`console.log(globalThis)`
# 24:33/ 2:18:30

[Link](https://www.youtube.com/watch?v=yB4n_K7dZV8&list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7&index=1)

Es la variable global tanto de node, como de javascript y el navegador. Es una variable global en toda nuestra aplicación. Vamos a poder acceder a ella no importa donde estemos.
En el navegador apunta a window. En node.js esto es lo que apunta en realidad es a "global". `globalThis` es la forma correcta de referirnos a ella.

**global <-- globalThis --> window**

## CommonJS Module System (Sistema clásico de módulos de node.js)
## Native Modules

Node.JS nos da un biblioteca enorme de módulos nativos que nos va a dar acceso al sistema de archivos, al sistema operativo, a internet, etc.

Pasar de un `require` a un `import`. Si me sitúo donde esta el require en los [...], me dá la opción para convertirlo automáticamate.

`import os from 'node:os'`

Los módulos nativos de node los puedes utilizar con CJS y ES modules.

**Si vas a utilizar la especificación, hay que utilizar la extensión.**

## File System

Es uno de los módulos más importantes. IMPORTANTE Siempre utilizamos el prefijo de los módulos nativos.
*Sincrona <-- o --> Asincrona*

# 47:29


## Asynchronous vs Synchronous

El problema de la sincronía: Podíamos ir haciendo cosas mientras lee el archivo: ` 3-fs-read.js`
Pero eso no lo puede hacer mientras lee el archivo, aqui entra la asincronia en JS. Como lo podemos simplificar para hacerlo asincrono `3-fs-read.js`. Lo transformamos a promesas.
Utilizar otro método en lugar de `readFileSync` podemos utilizar `readFile` que es la forma asíncrona de leer archivos.

## Callbacks

Cómo sabe nodeJS en qué momento ha terminado de leer el archivo. No lo sabe, para eso se utiliza un mecanismo que se llaman *callbacks*, los callbaks son funciones que se ejecutan cuando una tarea ha terminado.

`fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log(text);
})`

Este readFile acepta un terce parámetro un callback. Y en el callback, vamos a tener la información de si ha habido un error y si además, también ya tenemos en el segundo parámetro cuando haya leido el texto. Asi que lo que le estamos diciendo es:

* Ahora ya no lo podemos asignar `const text`, no es necesario, pero quiero que me leas el archivo `('./archivo.txt')`, que me lo codifiques con esto `utf-8`, cuando termines de leerlo sigas con esto: `(err, text) => { console.log(text)}`. Pero no me esperes y segui con esto otro: `console.log('Hacer cosas mientras lee el archivo')`. Cuando te avise entonces, me ejecutas el callback. *

## Promises

`fs/promises` para que en vez de callbacks, utilize promesas. Como son promesas estamos hablando de código asíncrono, y por lo tanto mientras lee el primer archivo podemos hacer cosas...
Muchos módulos de node.js puede utilizar promises. 

## Transformar Callbacks a Promises

Siempre hay que utilizar asíncrono, sea async await, promises, etc.
Es una utilidad especial, se llama promisy file, que lo que pueden hacer es crear la version de promesas de una que no sea de promesa.
Hay que pasarlo a modulos. Ya que debe ser asincronico.

## Async Await

Los ecmascript modules si tienen el soporte de utilizar await en el cuerpo del archivo, esto se llama *top level await* en commonJS no se puede hacer, pero en ecmascript modules, si se puede hacer.

En el otro se puede arreglar con lo que se llama *una función autoinvocada*.

`const { readFile } = require('node:fs/promises)`
`(() => {} )()` Es una función que hemos envuelto con parentesis y al estamos invocando justo cuando la estamos invocando.
Esto se llama *IIFE - Inmediatly Invoked Function Expression*.

`async function init (){ codigo }` Mientras lo creamos lo hace automaticamente.
Asincrono secuencial, en paralelo, asincrono, tres cosas diferentes.

## Path

Path es vamos a construir nuevas rutas de archivos, saber si un archivo tiene una extensión, recuperar una extensión, crear rutas absolutas. Va a decirnos sobre el path del archivo.
Es mala practica crearlas.
`./content/subfolder/test.txt` // X esto esta prohibido, por el sistema operativo, las barras unix son en unix // -> /, pero en windows -> \

## Comando LS

Podés ir a cualquier carpeta al poner ls. Es como un *dir*, nos dice si tengo ficheros, cuanto ocupan, etc.

# 1:19:53

# Objeto Process

Es un objeto global que proporciona información y control sobre el proceso actual de ejecución.
`console.log(process.argv)` forma en la que vamos a poder recuperar los argumentos.

# Map lo hace todo en asincrono, el map no para el proceso de await, no esta esperando de forma secuencial, el mapeo funciona ocurre en paralelo. Para hacerlo secuencial `for of`.

# 1:42:36

## NPM (node package manager)

Es un administrador de node y el registro de paquetes más grande de código que existe.

1. Registro de paquetes de código abierto y dependencias.
2. También es una línea de comando.

`pnpm` para instalar las dependencias.

Diferencias, el registro donde estan hospedas las dependencias y luego la linea de comandos para instalar, manejar y administras nuestras dependencias.

# Comandos NPM

`npm init` crea un package json, da una descripción en json con dependencias, etc.

`npm init -y` saltar los pasos

`npm uninstall xxxx` elimina paquetes y actualiza json y elimina la dependencia



* Comandos que podes ejecutar, para levantar el projecto, para ejecutar test, etc. *

*Picocolors* `npm i picocolors`

// 1.0.0 -> semantic versioning
// x.y.z -> x la major y es cuando se rompe la compatibilidad hacia atrás
// x.y.z -> y la minor y es cuando se añaden nuevas funcionalidades
// x.y.z -> z y la patch y es cuando se arreglan bugs

*TypeScript no sigue la semantic versioning*

## Dependencias de producción

De producción, nuestra aplicación lo necesita para funcionar, por ejemplo: `picocolors`.

## Dependencias de desarrollo

instación de dependencias de desarrollo `npm install standard -D` te busca errores. `-D` se instala como dependencia de desarrollo `--development` hay que indicar que es una dependencia de desarrollo.

# Separación de tipos de dependencias en json

Siempre evita instalar lo que no tiene sentido instalar. `npm install` se instala todo.

# 2:00:42

## Primer Servidor web con Node.JS

Vamos a tener la dependencia http, para eso `node:http` esto es un módulo nativo. Qué nos permite http, hacer procesos y conexiones con el protocolo http como por ejemplo crear un servidor y poder recibir request, peticiones.

Un servidor puede hacer solo dos cosas: o recibir una petición o devolver una respuesta. Por eso tendremos un callback que va a gestionar la request y el response. Asi cada vez que llegue una request vamos a poder responderle con algo.

// cuando recibo una peticion voy a devolver y responder y terminar la comunicacion con el mesje 'hola mundo'.

El puerto 0, lo que va a hacer es que automáticamente va a buscar el primer puerto que encuentre que esté disponible.
El server lo podemos utilizar para recuperar el puerto.

## Aplicacion con node que nos diga el puerto disponible

