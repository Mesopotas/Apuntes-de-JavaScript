// Filtrar numero pares

const numerosPares = [1,2,3,4,5,6,7,8,9]
const numerosParesResult = numerosPares.filter(numeros => numeros % 2 == 0)
console.log('Resultado es: ', numerosParesResult)

// Sumar todos los elementos

const valores = [1,2,3,4,5]
const resultadoReduce = valores.reduce((valor_anterior, valor_actual)=>{return valor_anterior + valor_actual})
console.log('Resultado es: ', resultadoReduce)

// Duplicar todos los elementos 

const numeros = [1,2,3,4,5,6]
const resutadoMap = numeros.map(numero => numero * 2)
console.log('Resultado es: ', resutadoMap )