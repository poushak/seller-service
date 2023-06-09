const productService = require("../services/product");

const getProducts = async (req, res) => {
  try {
    const userId = req.headers['x-id'];
    const products = await productService.getProducts(userId);
    res.json({ success: products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const payload = req.body;
    payload.sellerId = req.headers['x-id'];
    const product = await productService.createProduct(payload);
    res.json({ success: product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await productService.getProduct(req.params.id);
    res.json({ success: product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const payload = req.body;
    payload.sellerId = req.headers['x-id'];
    const product = await productService.updateProduct(req.params.id, payload);
    res.json({ success: product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await productService.deleteProduct(req.params.id);
    if(product) {
      res.json({ success: product });
    } else {
      res.status(400).json({error: 'invalid id'})
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProductFields = (req, res) => {
  try {
    const fields = productService.getProductFields();
    res.json({success: fields});
  } catch (err) {
    res.status(500).json({error: "unexpected error happened"})
  }
}

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductFields,
};