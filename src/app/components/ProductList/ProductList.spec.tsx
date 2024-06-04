import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductList } from "./ProductList";

const dummyProductList = [
  { id: 1, title: "Item 1", subTitle: "Foo" },
  { id: 2, title: "Item 2", subTitle: "Bar" },
  { id: 3, title: "Item 3", subTitle: "Baz" },
  { id: 4, title: "Item 4", subTitle: "Qux" },
];

const mockedClickHandler = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});
describe("ProductList Component", () => {
  it("should render the ProductList Component 4 items", () => {
    render(
      <ProductList
        products={dummyProductList}
        clickHandler={mockedClickHandler}
      />
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(4);
  });
  it("should fire clickHandler function", async () => {
    render(
      <ProductList
        products={dummyProductList}
        clickHandler={mockedClickHandler}
      />
    );
    const buttons = screen.getAllByRole("button");
    await userEvent.click(buttons[0]);
    expect(mockedClickHandler).toHaveBeenCalledWith("Item 1");
  });
});
