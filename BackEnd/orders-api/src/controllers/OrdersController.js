const orderService = require("../services/OrderService.tsx");
const orders = [];

const GetOrders = (req, res) => {
  res.json(orders);
};

const CreateNewOrder = (req, res) => {
  const newOrder = req.body;
  orders.push(newOrder);
  res.status(201).json(newOrder);
};

const GetOrderById = (req, res) => {
  const orderId = parseInt(req.params.id);
  const order = orders.find((o) => o.id === orderId);
  if (!order) {
    return res.status(404).json({ message: 'Orden no encontrada' });
  }
  res.json(order);
};


const PutOrder = (req, res) => {
  const orderId = parseInt(req.params.id);
  const updatedOrder = req.body;

  const index = orders.findIndex((o) => o.id === orderId);
  if (index === -1) {
    return res.status(404).json({ message: 'Orden no encontrada' });
  }

  orders[index] = updatedOrder;
  res.json(updatedOrder);
};


const DeleteOrder = (req, res) => {
  const orderId = parseInt(req.params.id);
  const index = orders.findIndex((o) => o.id === orderId);
  if (index === -1) {
    return res.status(404).json({ message: 'Orden no encontrada' });
  }
  const deletedOrder = orders.splice(index, 1)[0];
  res.json(deletedOrder);
};

module.exports = 
{ 
  GetOrders, 
  CreateNewOrder,
  GetOrderById,
  PutOrder,
  DeleteOrder
};