const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const fs = require("fs");
const fsPromise = fs.promises;
const Contenedor = require("./contenedor");
const constructor = new Contenedor("./productos.json");
const productosRouter = require("./productos");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set('views', './views')
app.set('view engine', 'hbs')
app.use("/productos", productosRouter);


app.engine(
    "hbs",
    handlebars.engine({
        extname: "hbs",
        layoutsDir: __dirname + "/views",
        defaultLayout: "main",
    })
);



// app.get('/saludo', (req,res)=>{
// const data ={
//     nombre: 'Florencia'
// }

// res.render("index", data)
// })

app.get("/", (req, res) => {
    res.render("root", {
      layout: "root",
      title: "Página principal",
      Precio: "Precio",
      addProd: "Añadir Producto",
    });
  });

  app.get("/productos", (req, res) => {
    res.render("productos", {
      layout: "productos",
      title: "Productos",
      compras: constructor.getAll(),
      noProd: "No hay productos",
    });
  });

  // app.set("views", __dirname + "/views");
  // app.set("view engine", "pug");
  // app.get("/", (req, res) => {
  //   res.render("root", {
  //     layout: "root",
  //     title: "Página principal",
  //     Precio: "Precio",
  //     addProd: "Añadir Producto",
  //   });
  // });

  // app.get("/productos", (req, res) => {
  //   res.render("productos", {
  //     layout: "productos",
  //     title: "Productos",
  //     compras: constructor.getAll().sort((a, b) => a.id - b.id),
  //     noProd: "No hay productos",
  //   });
  // });


  // app.set("views", __dirname + "/views");
  // app.set("view engine", "ejs");
  // app.get("/", (req, res) => {
  //   res.render("root", {
  //     layout: "root",
  //     title: "Página principal",
  //     Precio: "Precio",
  //     addProd: "Añadir Producto",
  //   });
  // });

  // app.get("/productos", (req, res) => {
  //   res.render("productos", {
  //     layout: "productos",
  //     title: "Productos",
  //     compras: constructor.getAll().sort((a, b) => a.id - b.id),
  //     noProd: "No hay productos",
  //   });
  // });
  

const server = app.listen(8080, () => {
    console.log(`Servidor desafio 4`);
  });

  
  server.on("error", (error) => {
    console.log(`Error !!!: ${error}`);
  });