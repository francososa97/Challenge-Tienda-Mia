import Item from '../Models/Item'; // Asegúrate de importar tu interfaz 'Orders'
import OrderStatus from '../Models/OrderStatus'; // Asegúrate de importar tu interfaz 'Orders'
import Cliente from '../Models/Cliente'; // Asegúrate de importar tu interfaz 'Orders'

  export default interface Order {
    Id: number;
    CreateDate: Date;
    Status: OrderStatus;
    Cliente: Cliente;
    ShippingAddress: string;
    ShippingPromise: Date;
    Items: Item[];
  }

  /* 

  const orden: Ordenes = {
  Id: 1,
  CreateDate: new Date(),
  Status: OrderStatus.Approve,
  Cliente: {
    nombre: 'Cliente de Prueba',
    email: 'cliente@example.com',
  },
  ShippingAddress: '123 Calle Principal',
  ShippingPromise: new Date(),
  Items: [
    { name: 'Producto 1', quantity: 3 },
    { name: 'Producto 2', quantity: 2 },
  ],
};

  */