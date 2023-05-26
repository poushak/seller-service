const ProductModel = require("../models/product");
const fields = require('../utils/productFields');

const getProducts = async (userId) => {
  return await ProductModel.find({sellerId: userId});
};

const createProduct = async (product) => {
  return await ProductModel.create(product);
};

const getProduct = async (id) => {
  return await ProductModel.findById(id);
};

const updateProduct = async (id, product) => {
  return await ProductModel.findOneAndUpdate({ _id: id }, product);
};

const deleteProduct = async (id) => {
  return await ProductModel.findByIdAndDelete(id);
};

const getProductFields = () => {
  return fields;
}

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductFields,
};
