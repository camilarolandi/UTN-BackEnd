const filesystem = require('fs')

/* filesystem.writeFileSync('prueba.txt', 'hola desde node.js', {encoding: 'utf-8'})


const resultado = filesystem.readFileSync('prueba.txt', {encoding: 'utf-8'})
console.log(resultado) */

/* filesystem.writeFileSync('prueba.json', JSON.stringify({nombre:'pepe'}, {encoding: 'utf-8'})) */

/* const objeto = JSON.parse(filesystem.readFileSync ('prueba.json', {encoding: 'utf-8'}))
console.log(objeto)
 */


const{createTxt}= require('./filesystem.js')
createTxt('prueba_2', 'hola soy cami')