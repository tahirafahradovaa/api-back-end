const express = require("express");
const { productsController } = require("../controller/controller");
const router = express.Router();
router.get("/", productsController.getAll);
router.get("/:id", productsController.getById);
router.post("/", productsController.add);
router.delete("/:id", productsController.remove);
router.put("/:id", productsController.update);

module.exports = router;
