const express = require("express");
const { default: mongoose } = require("mongoose");
const { products } = require("./models/Products");
var cors = require("cors");
const productsRouter = require("./routers/productsRouter");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://tahira:130199hH@code-academy.ws58g7e.mongodb.net/productsApi"
  )
  .then((res) => {
    console.log("Connect!");
  })
  .catch((err) => {
    console.log("err", err);
  });

app.get("/", function (req, res) {
  res.json("Hello");
});
app.use("/api/products", productsRouter);

app.listen(8080);
