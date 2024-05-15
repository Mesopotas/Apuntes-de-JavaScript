
const url = 'https://pokeapi.co/api/v2/pokemon/pikachu'

const fetchData = async () => {

    const  result = await fetch(url)

    const data = await result.json()

    console.log('datos de la api :', data)

    printData(data)

}

const printData = (datoPokemon) => {

    const listPokemon = document.getElementById('poke_list')
    //const listPokemon = document.querySelector('#poke_List') Nos valdria cualquier caso de los dos
    console.log('elemento #poke_list', listPokemon)

    const cardElement = document.createElement('div')

    cardElement.classList.add('card');
    
    cardElement.innerHTML = 
       `<div class="card-header"></div>
            <div class="card-body">
            <img
                src="./images/pokeball.png"
                alt="imagen de pokemon"
                class="card-body-img"
            />
            <h1 class="card-body-title clickable">${datoPokemon.name}</h1>
            <p class="card-body-text">id</p>
            </div>
            <div class="card-footer">
            <div class="card-footer-social">
                <h3 id="card-footer-type">type</h3>
                <p>Type</p>
            </div>
            <div class="card-footer-social">
                <h3 id="card-footer-height">height</h3>
                <p>Height</p>
            </div>
            <div class="card-footer-social">
                <h3 id="card-footer-weight">weight</h3>
                <p>Weight</p>
            </div>
        </div>`

    listPokemon.appendChild(cardElement)

    console.log('elemento card', cardElement)

}


//Llamamos a la funcion que hace el fetch
fetchData()


