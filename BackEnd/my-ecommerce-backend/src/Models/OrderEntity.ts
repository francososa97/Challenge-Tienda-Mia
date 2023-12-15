import Item from './Item';

class OrderEntity {
  public id: number;
  public createDate: Date;
  public status: string;
  public client: { nombre: string; email: string };
  public shippingAddress: string;
  public shippingPromise: Date;
  public items: Item[];

  constructor(data: {
    Id: number;
    CreateDate: string;
    Status: string;
    Cliente: { nombre: string; email: string };
    ShippingAddress: string;
    ShippingPromise: string;
    Items: Array<{
      Id: number;
      Title: string;
      Description: string;
      Url: string;
      Price: number;
      Quantity: number;
    }>;
  }) {
    this.id = data.Id;
    this.createDate = new Date(data.CreateDate);
    this.status = data.Status;
    this.client = data.Cliente;
    this.shippingAddress = data.ShippingAddress;
    this.shippingPromise = new Date(data.ShippingPromise);
    this.items = data.Items.map(
      (item) =>
        new Item({
          Id: item.Id,
          Title: item.Title,
          Description: item.Description,
          Url: item.Url,
          Price: item.Price,
          Quantity: item.Quantity,
        })
    );
  }
}

export default OrderEntity;
