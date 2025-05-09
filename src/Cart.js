class Cart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(items) {
    this.items.push(items);
  }

  getTotalItems() {
    return this.items.length;
  }
}

module.exports = Cart;
