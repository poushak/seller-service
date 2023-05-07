const express = require("express");
const {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const {uploadFiles} = require('../controllers/file');

const router = express.Router();

router.route("/:id/images")
  .post(uploadFiles)

router.route("/:id")
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct);

router.route("/")
  .get(getProducts)
  .post(createProduct);

module.exports = router;
