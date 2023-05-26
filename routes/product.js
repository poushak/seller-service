const express = require("express");
const {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductFields,
} = require("../controllers/product");
const {uploadFiles, deleteFile} = require('../controllers/file');

const router = express.Router();

router.route("/:id/images")
  .post(uploadFiles)
  .delete(deleteFile)

router.route("/fields")
  .get(getProductFields);

router.route("/:id")
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct);

router.route("/")
  .get(getProducts)
  .post(createProduct);

module.exports = router;
