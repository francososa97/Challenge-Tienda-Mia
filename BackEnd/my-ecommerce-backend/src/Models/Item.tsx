class Item {
  public id: number;
  public title: string;
  public description: string;
  public url: string;
  public price: number;
  public quantity: number;

  constructor(data: {
    Id: number;
    Title: string;
    Description: string;
    Url: string;
    Price: number;
    Quantity: number;
  }) {
    this.id = data.Id;
    this.title = data.Title;
    this.description = data.Description;
    this.url = data.Url;
    this.price = data.Price;
    this.quantity = data.Quantity;
  }
}

export default Item;
