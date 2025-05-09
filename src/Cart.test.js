// should get the cart items
// should get the total number of cart items
// should add items to the shopping cart
// should remove an item by itemId
// should get the total price of the cart items

//AAA
const Chance = require("chance");
const Cart = require("./Cart");

const chance = new Chance();

describe("when using the shopping cart object", () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  // Implementation details
  it("should get the cart items", () => {
    // Act
    const items = cart.getItems();

    // Assert
    expect(items).toBeDefined();
  });

  // funcionality
  it("should add items to the shopping cart", () => {
    item = {
      id: chance.guid(),
      price: chance.integer({ min: 1, max: 100 }),
    };

    // Act
    cart.addItem(item);

    // Expect
    expect(cart.getItems()).toContainEqual(item);
  });

  it("should get the total number of cart items", () => {
     item = {
      id: chance.guid(),
      price: chance.integer({ min: 1, max: 100 }),
    };
    cart.addItem(item);
    cart.addItem(item);

    const total = cart.getTotalItems();

    expect(total).toBe(2);
  });
});
