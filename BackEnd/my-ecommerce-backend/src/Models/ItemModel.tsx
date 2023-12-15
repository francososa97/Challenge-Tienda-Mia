// En 'src/models/ItemModel.ts'

import mongoose, { Document, Schema } from 'mongoose';

export interface ItemModel extends Document {
  name: string;
  price: number;
  quantity: number;
}

const itemSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Item = mongoose.model<ItemModel>('Item', itemSchema);

export default Item;
