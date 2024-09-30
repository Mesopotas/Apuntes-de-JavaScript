function calculate(data){

    let suma = 0

    let elemntoMasGrande = data [0]

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(`Elemento ${element}`);

        if (element > elemntoMasGrande){
            elemntoMasGrande = element
        }

        suma = suma + element

    }


    

    console.log(`La suma es ${suma}`)
    console.log(`La media es ${suma/data.length}`)
    console.log(`El elemento mas grande es ${elemntoMasGrande}`) 

}



let valores = [1980,60,30,40,50]

calculate(valores)

