const assert = require('assert').strict

function siNoExiste(array, item, position) {
    //filtro si existe el item en el array o no
    if(!array.includes(item))
    {
        //
        if(position)
        {
            array.unshift(item)
        }
        else 
        {
            array.push(item)
        }  
    }
    return array
}

//array
let array = ['pera', 'manzana']

//inserts frutas
siNoExiste(array, 'pera', false)
siNoExiste(array, 'platano', true)
siNoExiste(array, 'uva', false)

//Muestra el array por pantalla
console.log(array);