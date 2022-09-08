const express = require("express");
const app = express();

const productos = [];
const Container = require("./Contenedor");
const contenedor = new Container(productos);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", express.static(__dirname + "/public"));


app.get("/api/productos", async (req, res) => {
  try{
  res.send(contenedor.getAll());
}catch{
  res.status(200).json(data);
}});


app.get("/api/productos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.send(contenedor.getById(parseInt(id)));
  } catch (err) {
    res.status(404).send(err);
  }
});


app.post("/api/productos", async (req, res) => {
  const { nombre, precio, url } = req.body;
  const data = await contenedor.save({ nombre, precio, url });
  data == null
    ? res.status(500).json({ message: `Error en la caga` })
    : res.status(200).json(data);
});

app.put("/api/productos/:id", (req, res) => {
  try {
    const { id } = req.params;
    const prodNuevo = req.body;
    const idInt = parseInt(id);
    res.send(constructor.updateById(idInt, prodNuevo));
  } catch (err) {
    res.status(404).send(err.msg);
  }
});

app.delete("/api/productos/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.send(contenedor.deleteById(parseInt(id)));
  } catch (err) {
    res.status(404).send(err.msg);
  }
});


const server = app.listen(8080, () => {
  console.log(`Servidor desafio 4`);
});


server.on("error", (error) => {
  console.log(`Error !!!: ${error}`);
});