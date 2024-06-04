import { addToCart, Items, updaterFn } from ".";

const dummyItems = [
  { name: "Item 1", quantity: 1 },
  { name: "Item 2", quantity: 2 },
];

afterEach(() => {
  jest.clearAllMocks();
});

const mockedsetItems = jest.fn();
const mockedsetItemCount = jest.fn();

describe("updaterFn", () => {
  it("should update the quantity and return a new array", () => {
    const result = updaterFn({ items: dummyItems, itemIndex: 1 });
    expect(result).toEqual([
      { name: "Item 1", quantity: 1 },
      { name: "Item 2", quantity: 3 },
    ]);
  });
});

describe("addToCart", () => {
  it("should fire setItems with updated quantity items", () => {
    addToCart({
      product: "Item 1",
      items: dummyItems,
      itemCount: 1,
      setItemCount: mockedsetItemCount,
      setItems: mockedsetItems,
    });
    expect(mockedsetItems).toHaveBeenCalledWith([
      { name: "Item 1", quantity: 2 },
      { name: "Item 2", quantity: 2 },
    ]);
  });

  it("should fire setItems with new item", () => {
    addToCart({
      product: "Item 3",
      items: dummyItems,
      itemCount: 1,
      setItemCount: mockedsetItemCount,
      setItems: mockedsetItems,
    });
    expect(mockedsetItems).toHaveBeenCalledWith([
      { name: "Item 1", quantity: 1 },
      { name: "Item 2", quantity: 2 },
      { name: "Item 3", quantity: 1 },
    ]);
  });

  it("should fire setItemCount", () => {
    addToCart({
      product: "Item 1",
      items: dummyItems,
      itemCount: 2,
      setItemCount: mockedsetItemCount,
      setItems: mockedsetItems,
    });
    expect(mockedsetItemCount).toHaveBeenCalledWith(3);
  });
});
