class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros ;
        this.mascotas = mascotas;
    }

    getFullName(){
        let nombreCompleto = this.nombre +" "+this.apellido;
        console.log(`${nombreCompleto}`);
    }

    addMascota(mascota){
        let nuevaMascota = mascota;
        this.mascotas.push(nuevaMascota);
    }

    getMascota(){
        let cantidadMascotas = this.mascotas.length;
        console.log(cantidadMascotas);
    }

    addBook(book,autor){
        let libroNuevo = {
            nombre: book,
            autor: autor,
        }
        this.libros.push(libroNuevo);
    }

    getBooks(){
        let listaLibros = this.libros.map (a => a.nombre)
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

console.log(usuario1.mascotas.length)