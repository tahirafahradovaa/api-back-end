const { products } = require("../models/Products");

const productsController = {
  getAll: (req, res) => {
    products.find({ isDeleted: false }, (err, docs) => {
      if (!err) {
        res.json(docs);
        console.log(docs);
      } else {
        res.status(500).json(err);
      }
    });
  },
  getById: (req, res) => {
    let id = req.params.id;
    products.findById(id, (err, doc) => {
      if (!err) {
        res.json(doc);
      } else {
        res.status(500).json(err);
      }
    });
  },
  add: (req, res) => {
    let newProduct = new products({
      productName: req.body.productName,
      description: req.body.description,
      isDeleted: false,
    });

    newProduct.save(function (err, doc) {
      if (!err) {
        res.json(doc);
      } else {
        res.status(500).json(err);
      }
    });
  },
  remove: (req, res) => {
    let id = req.params.id;
    console.log(id);
    products.findByIdAndUpdate(id, { isDeleted: true }, (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        res.send("errr");
        res.status(500).json(err);
      }
    });
  },
  update: (req, res) => {
    let id = req.params.id;
    let body = req.body;
    console.log(body);

    products.findByIdAndUpdate(id, body, (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        res.send("errr");
        res.status(500).json(err);
      }
    });
  },
};
module.exports = {
  productsController,
};
