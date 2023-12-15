"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(id, title, description, url, price, quantity) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
        this.price = price;
        this.quantity = quantity;
    }
}
exports.default = Item;
