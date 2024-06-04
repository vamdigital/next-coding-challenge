import { render, screen } from "@testing-library/react";
import { ItemCountList } from "./ItemCountList";

const dummyItems = [
  { name: "Item 1", quantity: 1 },
  { name: "Item 2", quantity: 1 },
  { name: "Item 3", quantity: 1 },
];
describe("ItemCountList Component", () => {
  it("should render No items in Bag when items length is 0", () => {
    render(<ItemCountList items={[]} />);
    const el = screen.getByText(/no items in bag/i);
    expect(el).toBeInTheDocument();
  });

  it("should render 3 ItemCount Component", () => {
    render(<ItemCountList items={dummyItems} />);
    const itemCountListComponent = screen.getByTestId("item-count-list");
    const itemCountComponent = screen.getAllByTestId("item-count");
    expect(itemCountListComponent).toBeInTheDocument();
    expect(itemCountComponent).toHaveLength(3);
  });
});
