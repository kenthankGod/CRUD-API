const Product = require("../models/Product");

const getAllproduct = async (req, res) => {
  try {
    const getproduct = await Product.find();
    res.json(getproduct);
  } catch (error) {
    res.json({ message: error });
  }
};

const createproduct = async (req, res) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    inStock: req.body.inStock,
  });
  try {
    const savedproduct = await product.save();
    res.json(savedproduct);
  } catch (error) {
    res.json({ message: error });
  }
};

const deleteproduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "deleted!" });
  } catch (error) {
    res.json({ message: error });
  }
};

const updateproduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      inStock: req.body.inStock,
    });
    res.send({ message: "updated!" });
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  getAllproduct,
  createproduct,
  updateproduct,
  deleteproduct,
};
