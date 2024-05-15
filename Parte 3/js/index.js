
const url = 'https://pokeapi.co/api/v2/pokemon/pikachu'

const fetchData = async () => {

    const  result = await fetch(url)

    const data = await result.json()

    console.log('datos de la api :', data)

}

//Llamamos a la funcion que hace el fetch
fetchData()

