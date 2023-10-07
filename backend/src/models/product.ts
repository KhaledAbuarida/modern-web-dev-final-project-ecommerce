import { Schema, model } from "mongoose";
import Product from "../types/product";

const productSchema = new Schema<Product>(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 0 },
    image: { type: String, required: true },
    gallery: { type: [] },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { versionKey: false }
);
const ProductModel = model("Product", productSchema);

export default ProductModel;
