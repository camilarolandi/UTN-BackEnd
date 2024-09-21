const filesystem = require('fs')
const { createSecureContext } = require('tls')


/* cuando coloco async en una fn la fn retornara una promise cuando se ejecute el evento (se resuelva la funcion) se ejecuta LUEGO el console.log*/
const createTxt = async (file_name, text) => {

    const file = file_name + '.txt'

  /*   filesystem.writeFileSync(file, text, {encoding: 'utf-8'}) */
let resultado =  await filesystem.promises.writeFile(file,text, {encoding: 'utf-8'})
let textoGuardado = await filesystem.promises.readFile(file, {encoding: 'utf-8'})
console.log(textoGuardado)
}

module.exports = {createTxt:createTxt, nombre: 'pepe'}