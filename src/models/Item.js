import { v4 as uuidv4 } from "uuid";

class Item {
  constructor(name, type, size, color, amount, image) {
    this.id = uuidv4();
    this.name = name;
    this.type = type;
    this.size = size;
    this.color = color;
    this.amount = amount;
    this.image = image;

  }
}

export default Item;