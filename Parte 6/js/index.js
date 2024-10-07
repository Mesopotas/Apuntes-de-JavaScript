function numerosPares(){

    for (let i = 0; i<101; i++){

        if (i % 2 === 0){
            console.log(i)
        }

    }

}

function pingPong(){

    for (let i = 0; i<101; i++){

        if (i % 10 === 0){
            console.log(`Pong`)
        }else if (i % 5 === 0){
            console.log(`Ping`)
        }else{
            console.log(i)
        }

    }

}

function VillasPingpong() {
    for (let i = 0; i < 100; i++) {
        if (i % 5 ===0 && i % 2 === 0) {
            console.log(i + `pong`)
        }else if (i % 5){
            console.log(i)   
        }else(console.log(i + `ping`))   
    }
}


function tablaMultiplicar(){

    for(i=0; i < 11; i++){

        for(x = 0; x < 11; x++){

            console.log(`${i} * ${i} = ${i * x} `)

        }
    }

}


VillasPingpong()
pingPong()
numerosPares()
tablaMultiplicar()

