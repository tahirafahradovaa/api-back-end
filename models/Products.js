const { default: mongoose, now } = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
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
