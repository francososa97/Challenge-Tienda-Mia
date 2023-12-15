"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(id, createDate, status, client, shippingAddress, shippingPromise, items) {
        this.id = id;
        this.createDate = createDate;
        this.status = status;
        this.client = client;
        this.shippingAddress = shippingAddress;
        this.shippingPromise = shippingPromise;
        this.items = items;
    }
}
exports.default = Order;
