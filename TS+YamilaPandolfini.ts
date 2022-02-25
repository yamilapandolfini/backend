function sleep (ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function operacion(unNumero: number, otroNumero: number, nombreOperacion: string) {
    
     var resultadoFinal = 0;

    if(nombreOperacion == "suma"){
        import ('./suma').then( x => {
            const calculo = new x.Suma(unNumero, otroNumero);
            const resultadoFinal = calculo.resultado();
            console.log(resultadoFinal);
        });
         return resultadoFinal; 
    }

    if(nombreOperacion == "resta"){
        import ('./resta').then( x => {
            const calculo = new x.Resta(unNumero, otroNumero);
            const resultadoFinal = calculo.resultado();
            console.log(resultadoFinal);
        });
        return resultadoFinal; 
    }
}

async function operaciones(unaOperacion: string) {
    let unNumero: number = 10;
    let otroNumero: number = 5;
    let calculoAResolver: string = unaOperacion;
    const resultadoOperacion:any = await sleep(2000).then(() => operacion(unNumero,otroNumero,calculoAResolver));
    console.log(resultadoOperacion) //comentado para que al menos se muestre funcionadidad de dynamic import
}

//Prueba Operacion Suma
//operaciones("suma");

//Prueba Operacion Resta
operaciones("resta");

