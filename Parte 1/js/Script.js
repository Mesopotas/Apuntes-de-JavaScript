console.log ('esto es el primer console log')

/* TIPOS DE CONSTANTES */

const NUMERO_PI = 3.1416;

let nombre = 'juan'

console.log ('Mi nombre es', nombre)


console.log ('Mi nombre es', nombre, 'y mi numero favorito es', NUMERO_PI)


console.log ('Mi nombre es: ' + nombre + 'y el numero pi es ', NUMERO_PI)


/* TIPOS DE DATOS */
// STRING

let apellido = ' Pedro'
nombre = 'Juan '

console.log ('Mi nombre y apellido es', nombre)

//NUMBER 

let edad = '2'
let telefono = '243235'
let peso = '234234.24'


//BOOLEAN: TRUE/FALSE

let mayor_edad = true
let menor_edad = false

console.log(mayor_edad)


// ARRAY

let cursos = ['DAW','DAM','OTROS']
        
console.log(cursos)
console.log(cursos[0])
console.log(cursos.length)

let persona = ['Pedro', 1, true]

//AÑADIR UN ELEMENTO AL FINAL DE UN ARRAY 

let actividades = ['dibujar', 'escribir', 'cantar']
console.log(actividades)
actividades.push ('saltar')
console.log (actividades)

//AÑADIR UN ELEMENTO AL PRINCIPIO DE UN ARRAY 

let hacer = ['dibujar', 'escribir', 'cantar']
console.log(actividades)
hacer.unshift ('saltar')
console.log (hacer)

//ELIMINAR EL ULTIMO ELEMENTO DE UN ARRAY 

let vivir = ['dibujar', 'escribir', 'cantar']
console.log(vivir)
vivir.pop()
console.log(vivir)

// ELIMINA ELEMENTO DE UN ARRAY (PRIMER VALOR ES LA POSCION (0 EN ESTE CASO (SERIA DIBUJAR)) , Y EL SEGUNDO VALOR ES HASTA DONDE VA A ELIMINAR (1 EN ESTE CASO TAMBIEN DIBUJAR))

let soñar = ['dibujar', 'escribir', 'cantar']
console.log(soñar)
soñar.splice(0,1)
console.log(soñar)

// OBJETS

let animal = {
    especie: 'gato',
    edad: 10,
    esterilizado: true,
    pienso: ['carne','verduras']
}

console.log (animal.especie)
console.log (animal)
animal.especie = 'gatoperro'
console.log (animal.especie)
console.log (animal)


let mascotas = [
    {
        especie: 'gato',
        edad: 10,
        esterilizado: true,
        pienso: ['carne','verduras'] 
    },
    {
        especie: 'pero',
        edad: 3,
        esterilizado: true,
        pienso: ['pechuga'] 
    }
]

console.log(mascotas)

//METODOS JS MAS IMPORTANTES: FILTER, MAP, REDUCE   

//Filter

const palabras = ['espejo', 'limite', 'ola', 'colores']
const resultadoFilter = palabras.filter(palabra =>{
    console.log('dentro del filter', palabra)
    console.log('dentro del filter de palabra.length', palabra.length)
    return palabra.length > 5
})

console.log('Resultado es: ', resultadoFilter)

//Map

const numeros = [1,2,3,4,5,6]
const resutadoMap = numeros.map(numero => numero * 2)
console.log('Resultado es: ', resutadoMap )

//Reduce 

const valores = [10,20,30]
const resultadoReduce = valores.reduce((valor_anterior, valor_actual)=>{return valor_anterior + valor_actual})
console.log('Resultado es: ', resultadoReduce)