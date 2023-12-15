import Item from '../Models/Item';
const productRepository = require("../Repository/ProductRepository.js");


class ProductService {
  private orders: Item[] = [];

  constructor() {
    // Inicializa las órdenes con datos de ejemplo o carga desde una fuente de datos.
  }

  getAllOrders(): Item[] {
    return this.orders;
  }

  getOrderById(id: number): Item | undefined {
    return this.orders.find((order) => order.Id === id);
  }

  createOrder(newOrder: Item): Item {
    // Genera un nuevo ID para la orden (esto puede hacerse de manera más robusta en producción).
    const nextId = this.orders.length > 0 ? Math.max(...this.orders.map((order) => order.Id)) + 1 : 1;
    newOrder.Id = nextId;

    this.orders.push(newOrder);
    return newOrder;
  }

  updateOrder(id: number, updatedOrder: Item): Item | undefined {
    const index = this.orders.findIndex((order) => order.Id === id);
    if (index === -1) {
      return undefined; // Orden no encontrada
    }

    this.orders[index] = { ...updatedOrder, Id: id };
    return this.orders[index];
  }

  deleteOrder(id: number): Item | undefined {
    const index = this.orders.findIndex((order) => order.Id === id);
    if (index === -1) {
      return undefined; // Orden no encontrada
    }

    const deletedOrder = this.orders.splice(index, 1)[0];
    return deletedOrder;
  }
}

export default ProductService;