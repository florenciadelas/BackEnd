class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    countMascotas() {
        if (libros.lenght > 0) {
           return this.libros.lenght
        } else {
            return `No posee libros`
        }
    }

    getFullName() {
       return `Nombre: ${this.nombre} ${this.apellido}`
    }

    addMascota(nombre) {
        this.mascotas.push(nombre);
        return this.mascotas;
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre, autor});
        return this.libros;
      }

      getBooksNames() {
        return this.libros.map((libro) => libro.nombre);
    }

}

const usuario = new Usuario(
    "Florencia",
    "Delas",
    [{
        nombre: "Harry Potter",
        autor: "J. K. Rowling",
    }],
    ["perro", "gato"]    

)
console.log(usuario.countMascotas());
console.log(usuario.getfullName());
console.log(usuario.addMascota("serpiente"));
console.log(usuario.addBook("El psicoanalista", "John Katzenbach"));
console.log(usuario.getBooksNames());
