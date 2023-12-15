// En 'src/controllers/OrdersController.ts'

import { Request, Response } from 'express';
import Order from '../Models/OrderModel';
import OrderEntity from '../Models/OrderEntity';
import OrderModel from '../Models/OrderModel'; 



// Obtener todas las órdenes
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await OrderModel.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las órdenes');
  }
};

// Obtener una orden por ID
export const getOrderById = async (req: Request, res: Response) => {
  const orderId = req.params.id;
  const intOrderId = parseInt(orderId, 10);

  try {
    const orders = await OrderModel.find();
    console.log(orders);
    let orderSelected = {};
    orders.map(x => {
      if(x.Id === intOrderId)
        orderSelected = x;
    });
    if ( Object.entries(orderSelected).length === 0) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }

    res.status(200).json(orderSelected);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al obtener la orden por ID');
  }
};

// Crear una nueva orden
export const createOrder = async (req: Request, res: Response) => {
  const { id, createDate, status, client, shippingAddress, shippingPromise, items } = req.body;

  const orderId = id;
  const intOrderId = parseInt(orderId, 10);

  try {
    const orders = await OrderModel.find();
    let orderSelected = {};

    orders.map(x => {
      if(x.Id === intOrderId)
        orderSelected = x;
    });
    if ( Object.entries(orderSelected).length !== 0) {
      return res.status(402).json({ message: 'El id solicitado ya existe en la base de datos' });
    }
  } catch (error) {
    res.status(402).json({ message: 'El id solicitado ya existe en la base de datos' });
  }
  
  try {
    let newOrder = new Order({
      id,
      createDate,
      status,
      client,
      shippingAddress,
      shippingPromise,
      items,
    });
    newOrder.Id = id;
    newOrder.CreateDate = createDate;
    newOrder.Status = status;
    newOrder.Cliente = client;
    newOrder.ShippingAddress = shippingAddress;
    newOrder.ShippingPromise = shippingPromise;
    newOrder.Items= items;

    const savedOrder = await newOrder.save();

    // Devolver el documento completo en la respuesta
    res.status(200).json({ message: 'Orden creada exitosamente', order: savedOrder });
  } catch (error) {
      console.error(error);
      res.status(500).send('Error al crear la orden');
  }
}
