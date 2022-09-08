class Container {
    constructor(array) {
      this.array = array;
    }
  async save(objecto) {
    try {
      const productFound = this.array.find(
        ({
          nombre
        }) => nombre === objecto.nombre
      );

      if (productFound) {
        return null;
      } else {
        objecto.id = this.array.length + 1;
        this.array.push(objecto);
        return objecto;
      }
    } catch (error) {
      console.error(`Error no se encontro el producto`);
    }
  }
  
    async getById(idProducto) {
      try {
        const idOk = this.array.find(({ id }) => id == idProducto);
        if (idOk) {
          console.log(`Se encontro correctamente`);
          return idOk;
        } else {
          console.log("No se han encontrado");
        }
      } catch (error) {
        console.error(`Se produjo un error`);
      }
    }
  
    async getAll() {
      try {
        return this.array;
      } catch (error) {
        console.error(`Se ha producido un error`);
      }
    }
  
    updateById(idProducto, objecto) {
      try {
        const idOk = this.array.filter(({ id }) => id != idProducto);
        const prodEncontrado = this.array.find(({ id }) => id == idProducto);
  
        if (prodEncontrado) {
          const prodEncontrado = { ...objecto, id: idProducto};
          idOk.push(prodEncontrado);
          this.array = idOk;
          console.log(`Se realizo el cambio correctamente`, prodEncontrado);
          return prodEncontrado;
        } else {
          return null;
        }
      } catch (error) {
        console.error(`Se produjo un error`);
      }
    }
    
    async deleteById(idEntered) {
      try {
        const leakedID = this.array.filter(({ id }) => id != idEntered);
        const idFound = this.array.find(({ id }) => id == idEntered);
  
        if (idFound) {
          console.log(
            `Se ha eliminado el objeto con id:${idEntered} >> [[${idFound.title}]]`
          );
          this.array = leakedID
          return idFound;
        } else {
          console.log(`No se ha encontrado el objeto con id: ${idEntered}`);
        }
      } catch (error) {
        console.error(`Se ha producido un error en deleteById: ${error}`);
      }
    }
  }
  
  module.exports = Container;