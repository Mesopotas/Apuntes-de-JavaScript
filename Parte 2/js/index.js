console.log('Hola Juan de Js')


window.addEventListener('DOMContentLoaded',(event)=>{
    console.log('DOMContentLoaded')


    const title = document.getElementById('title')
    console.log('title: ', title)

    const subtitle = document.getElementById('subtitle')
    console.log('subtitle: ', subtitle)

    const text = document.getElementsByClassName('text')
    console.log('text: ', text)

    const card1 = document.querySelector('.card')
    const card2 = document.querySelector('.card#high')

    console.log('card1: ', card1)
    console.log('card2: ', card2)

    //Cambiar texto y contenido HTML
    
    subtitle.innerText = 'Pedro Juan'
    text[0].innerText = 'Spawneo de la nada texto'
    card1.innerHTML = '<p>Hola wenas</p>'

    //Modificar estilo de CSS

    subtitle.style.color = 'pink'
    subtitle.style.background = 'red'
    
});

function cambiarTitulo () {
    console.log('Funcion CambiarTitulo')
    const parrafo = document.getElementById('parrafo')
    const boton = document.getElementById('button')
    if(parrafo.style.display === 'none'){
        parrafo.style.display = 'block'
    } else{
        parrafo.style.display = 'none'        
    }


}


console.log('Adios Juan de Js')

