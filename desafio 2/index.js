const fs = require("fs")

class Contenedor {
    constructor(archivo) {
        this.archivo = archivo;
    }

    // Funcion guardar objeto 
    async save(objeto) {
        try {
            const data = await fs.promises.readFile("data/productos.json", "utf-8")
            const producto = JSON.parse(data)
            const id = producto.length + 1;
            objeto.id = id;
            producto.push(objeto)
            const usuariosString = JSON.stringify(producto)
            await fs.promises.writeFile("data/productos.json", usuariosString)
            return producto
        } catch (error) {
            console.error("Error en la creacion de producto")
        }
    }

    // Funcion para devolver el array completo
    async getAll() {
        try{
        const data = await fs.promises.readFile("data/productos.json", "utf-8")
        return JSON.parse(data) ;
    }catch{
        console.error("Error")
    }}

// Funcion para obtener 1 producto por ID (no se usa await porque no se espera nada externo)
async getById(id){
const data = await fs.promises.readFile("data/productos.json", "utf-8")
const productos = JSON.parse(data)
const producto = productos.find((producto)=> producto.id == id)
if(producto){
return producto;
}else{
    return "Producto no encontrado"}
}

// Funcion para eliminar por id.
async deleteById(id) {
    try{
    const data = fs.readFileSync("data/productos.json", "utf-8");
    const productos = JSON.parse(data);
    const nuevosProductos = productos.filter((producto) => producto.id !== id);
    const dataString = JSON.stringify(nuevosProductos);
    fs.writeFileSync("data/productos.json", dataString);
    return nuevosProductos;
}catch{
    console.error("Error al eliminar por ID")
}
  }

  // Funcion para eliminar todo
  deleteAll() {
    try{
        fs.writeFileSync("data/productos.json", "[]");
        return "[]";
    }catch{
        console.error("Error al eliminar la base")
    }
  }


}//fin



async function start() {
    const db = new Contenedor("productos.json");
    // db.save({
    //     nombre: "remera",
    //     precio: 100,
    //     url: "https://sp.depositphotos.com/stock-photos/gatito.html"
    // });
    // const productos = await db.getAll()
    // console.log(productos)
    // const producto = await db.getById(1)
    // console.log(producto)
    // db.deleteAll(); 
    db.deleteById(3);
}

start();