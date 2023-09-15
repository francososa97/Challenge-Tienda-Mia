// Datos de ejemplo para órdenes de compra (simulación de una base de datos)
const orders = [];

// Ruta para obtener todas las órdenes de compra
app.get('/orders', (req, res) => {
  res.json(orders);
});

// Ruta para crear una nueva orden de compra
app.post('/orders', (req, res) => {
  const newOrder = req.body;
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});

// Ruta para obtener una orden de compra por ID
app.get('/orders/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const order = orders.find((o) => o.id === orderId);
  if (!order) {
    return res.status(404).json({ message: 'Orden no encontrada' });
  }
  res.json(order);
});

// Ruta para actualizar una orden de compra por ID
app.put('/orders/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const updatedOrder = req.body;

  const index = orders.findIndex((o) => o.id === orderId);
  if (index === -1) {
    return res.status(404).json({ message: 'Orden no encontrada' });
  }

  orders[index] = updatedOrder;
  res.json(updatedOrder);
});

// Ruta para eliminar una orden de compra por ID
app.delete('/orders/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const index = orders.findIndex((o) => o.id === orderId);
  if (index === -1) {
    return res.status(404).json({ message: 'Orden no encontrada' });
  }
  const deletedOrder = orders.splice(index, 1)[0];
  res.json(deletedOrder);
});