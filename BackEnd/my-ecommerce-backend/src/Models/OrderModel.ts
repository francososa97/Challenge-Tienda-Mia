import mongoose, { Schema, Document } from 'mongoose';

interface OrderItem {
  Id: number;
  Title: string;
  Description: string;
  Url: string;
  Price: number;
  Quantity: number;
}

interface OrderDocument extends Document {
  Id: number;
  CreateDate: Date;
  Status: string;
  Cliente: { nombre: string; email: string };
  ShippingAddress: string;
  ShippingPromise: Date;
  Items: OrderItem[];
}

const OrderSchema = new Schema<OrderDocument>({
  Id: Number,
  CreateDate: Date,
  Status: String,
  Cliente: {
    nombre: String,
    email: String,
  },
  ShippingAddress: String,
  ShippingPromise: Date,
  Items: [
    {
      Id: Number,
      Title: String,
      Description: String,
      Url: String,
      Price: Number,
      Quantity: Number,
    },
  ],
});

const Order = mongoose.model<OrderDocument>('order', OrderSchema);

export default Order;
