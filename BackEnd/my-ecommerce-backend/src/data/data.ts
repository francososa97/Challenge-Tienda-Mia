// src/data.ts
import mongoose, { Document, Schema } from 'mongoose';

const itemSchema = new Schema({
  title: String,
  description: String,
  url: String,
  price: Number,
  quantity: Number,
});

const orderSchema = new Schema({
  createDate: Date,
  status: String,
  client: String,
  shippingAddress: String,
  shippingPromise: Date,
  items: [itemSchema],
});

const OrderModel = mongoose.model('Order', orderSchema);

export const initializeData = async (): Promise<void> => {
  try {
    await OrderModel.deleteMany(); // Elimina todos los documentos existentes

    const item1 = { title: 'Product 1', description: 'Description 1', url: 'url1', price: 10, quantity: 2 };
    const item2 = { title: 'Product 2', description: 'Description 2', url: 'url2', price: 15, quantity: 1 };

    const order1 = new OrderModel({
      createDate: new Date(),
      status: 'Approve',
      client: 'Customer 1',
      shippingAddress: 'Address 1',
      shippingPromise: new Date(),
      items: [item1],
    });

    const order2 = new OrderModel({
      createDate: new Date(),
      status: 'Traveling',
      client: 'Customer 2',
      shippingAddress: 'Address 2',
      shippingPromise: new Date(),
      items: [item2],
    });

    await OrderModel.insertMany([order1, order2]);
    console.log('Datos inicializados en MongoDB.');
  } catch (error) {
    console.error('Error al inicializar datos:', error);
  }
};

export default OrderModel;
