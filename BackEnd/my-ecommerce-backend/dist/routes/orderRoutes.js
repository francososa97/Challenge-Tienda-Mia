"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OrdersController_1 = require("../controllers/OrdersController");
const router = express_1.default.Router();
router.get('/orders', OrdersController_1.getAllOrders);
router.get('/orders/:id', OrdersController_1.getOrderById);
router.post('/orders', OrdersController_1.createOrder);
exports.default = router;
