class Cart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    if (!item) {
      throw new Error();
    }

    this.items.push(item);
  }

  getTotalItems() {
    return this.items.length;
  }
}

module.exports = Cart;
