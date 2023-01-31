const { default: mongoose, now } = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  productName: String,
  description: String,
  productDate: {
    type: Date,
    default: Date.now(),
  },
  isDeleted: { type: Boolean, default: false },
});

const products = mongoose.model("Product", productSchema);

module.exports = {
  products,
};
