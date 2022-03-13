const fs = require('fs')

class Archivo{

    constructor(fileName){
        this.file = fileName;
        this.nameFile = this.file + '.txt';
        this.productos = []
    }

    async leer(){
        try{
            const content = await fs.promises.readFile(__dirname + '/' + this.nameFile, 'utf-8')
            console.log(content)
        }
        catch(error){
            console.log([])
        }
    }

    async guardar(aName, aPrice, aThumbnail){
        let newProduct = {
            "title": aName,
            "Price": aPrice,
            "thumbnail" : aThumbnail,
            "id": this.productos.length + 1,
        }
        this.productos.push(newProduct);

        try{
            await fs.promises.writeFile(__dirname + '/' + this.nameFile, JSON.stringify(this.productos,null,'\t'));
            console.log("Producto agregado");
        }
        catch(error){
            console.log("Error, no se pudo escribir archivo");
        }
    }

    async borrar (){
        try{
            await fs.promises.unlink(__dirname + '/' + this.nameFile)
            console.log("Archivo borrado");
        }
        catch(error){
            console.log("Error al borrar, archivo no encontrado");
        }
    }

}

let test = new Archivo("productos");


///////////Tests///////////

/*Funcion Agregar*/
test.guardar("Patineta",1500,"https://auteco.vteximg.com.br/arquivos/ids/194250-550-550/LITE-ecommerce.jpg?v=637382803501800000");
test.guardar("Patines",2500,"https://phantom-marca.unidadeditorial.es/d51d0a4ad3a33596caf9f3517ebc81fa/crop/0x78/1000x639/resize/1320/f/jpg/assets/multimedia/imagenes/2021/05/31/16224732603005.jpg");
test.guardar("Bicicleta",4500,"https://i.pinimg.com/originals/a0/92/57/a09257e284b0040ad926b52b2c54e85e.png");
test.guardar("Monopatin",3500,"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/245/791/products/718e032a-238d-42be-9830-d470019ae09a-78dd77bf4cb874088c16232991142539-640-0.jpg");

/*Funcion Leer*/

test.leer();

/*Funcion Borrar*/

//test.borrar();