const express = require("express");
const productsController = require("../../controllers/ProductsController");
const ordersController = require("../../controllers/OrdersController");

const router = express.Router();

router
    .get("/order", ordersController.GetOrders)
    .post("/order", ordersController.CreateNewOrder)
    .get("/order/:id", ordersController.GetOrderById)
    .patch("/order/:id", ordersController.PutOrder)
    .delete("/order/:id", ordersController.DeleteOrder)
    .get("/product", productsController.GetProducts)
    .post("/product", productsController.CreateNewProduct)
    .get("/product/:id", productsController.GetProductById)
    .patch("/product/:id", productsController.PutProduct)
    .delete("/product/:id", productsController.DeleteProduct);

module.exports = router;