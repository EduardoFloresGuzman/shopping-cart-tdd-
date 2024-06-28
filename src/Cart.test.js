// should get the cart items
// should get the total number of cart items
// should add items to the shopping cart
// should remove an item by itemId
// should get the total price of the cart items

const Chance = require("chance");
const Cart = require("./Cart");

const chance = new Chance();

describe("when using Cart object", () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it("should get the cart items", () => {
    //ACT
    const cartItems = cart.getItems();

    //ASSERT
    expect(cartItems).toBeDefined();
  });

  it("should add items to the shopping cart", () => {
    //ARRANGE
    const item = {
      id: chance.guid(),
      price: chance.integer(),
    };

    //ACT
    cart.addItem(item);

    //ASSERT
    expect(cart.items).toContainEqual(item);
  });

  it("should get the total number of cart items", () => {
    //ARRANGE
    const item = {
      id: chance.guid(),
      price: chance.integer(),
    };
    const itemTwo = {
      id: chance.guid(),
      price: chance.integer(),
    };
    cart.addItem(item);
    cart.addItem(itemTwo);

    //ACT
    const totalCartItems = cart.getTotalItems();

    //ASSERT
    expect(totalCartItems).toBe(2);
  });

  it("should throw an error when the item provided to addItem method is invalid eg: null", () => {
    //ARRANGE
    let error;

    //ACT
    try {
      cart.addItem(null);
    } catch (e) {
      error = e;
    }

    //ASSERT
    expect(error).toBeDefined();
  });
});
