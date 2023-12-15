import express from 'express';
import { getAllOrders, getOrderById, createOrder } from '../controllers/OrdersController';

const router = express.Router();

router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.post('/', createOrder);

export default router;
