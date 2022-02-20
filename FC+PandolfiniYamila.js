function Usuario(nombre, apellido, libros,mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;

    this.getFullName = function (){
        let nombreCompleto = this.nombre +" "+this.apellido;
        console.log(`${nombreCompleto}`)
    }

    this.addMascota = function (mascota){
        this.mascotas.push(mascota);
    }

    this.getMascota = function (){
        console.log(this.mascotas.length);
    }

    this.addBook= function (book,autor){
        let libroNuevo = {
            nombre:book,
            autor: autor,
        }
        this.libros.push(libroNuevo);
    }

    this.getBooks =  function (){
       let listaLibros = this.libros.map(a => a.nombre)
       console.log(listaLibros);
    }
}


let usuario1 = new Usuario ("Laura"," No Esta",[{nombre:"La Magia del Orden", autor:"Marie Kondo"}], ["perro"]);

let usuario2 = new Usuario ("Beto"," Casella",[{nombre:"Muchas vidas Muchos Maestros", autor:"Brian Weiss"}], ["canario"]);

usuario1.getFullName();
usuario1.addMascota("gato");
usuario1.getMascota();
usuario1.addBook("harry Potter","Jk Rowling");
usuario1.getBooks();

usuario2.getFullName();
usuario2.addMascota("tortuga");
usuario2.getMascota();
usuario2.addBook("El Elemento","Ken Robinson");
usuario2.getBooks();

