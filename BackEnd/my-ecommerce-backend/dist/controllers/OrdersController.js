"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = exports.getOrderById = exports.getAllOrders = void 0;
const Order_1 = __importDefault(require("../Models/Order"));
const orders = [];
const getAllOrders = (req, res) => {
    res.json(orders);
};
exports.getAllOrders = getAllOrders;
const getOrderById = (req, res) => {
    const orderId = req.params.id;
    const order = orders.find((o) => o.id === orderId);
    if (order) {
        res.json(order);
    }
    else {
        res.status(404).json({ message: 'Order not found' });
    }
};
exports.getOrderById = getOrderById;
const createOrder = (req, res) => {
    const { createDate, status, client, shippingAddress, shippingPromise, items } = req.body;
    const newOrder = new Order_1.default(Math.random().toString(36).substring(7), createDate, status, client, shippingAddress, shippingPromise, items);
    orders.push(newOrder);
    res.status(201).json(newOrder);
};
exports.createOrder = createOrder;
