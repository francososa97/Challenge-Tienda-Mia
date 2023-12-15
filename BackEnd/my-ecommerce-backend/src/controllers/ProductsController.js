const productService = require("../services/ProductService.tsx");
const products = [
];

const GetProducts = (req, res) => {
  res.json(products);

};

const CreateNewProduct = (req, res) => {
  const newproduct = req.body;
  products.push(newproduct);
  res.status(201).json(newproduct);
};

const GetProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((o) => o.id === productId);
  if (!product) {
    return res.status(404).json({ message: 'Orden no encontrada' });
  }
  res.json(product);
};

const PutProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedproduct = req.body;

  const index = products.findIndex((o) => o.id === productId);
  if (index === -1) {
    return res.status(404).json({ message: 'Orden no encontrada' });
  }

  products[index] = updatedproduct;
  res.json(updatedproduct);
};

const DeleteProduct = (req, res) => {
    const productId = parseInt(req.params.id);
    const index = products.findIndex((o) => o.id === productId);
    if (index === -1) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }
    const deletedproduct = products.splice(index, 1)[0];
    res.json(deletedproduct);
};


module.exports = 
{
  GetProducts,
  CreateNewProduct,
  GetProductById,
  PutProduct,
  DeleteProduct
};