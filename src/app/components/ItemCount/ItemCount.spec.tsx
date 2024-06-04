import { render, screen } from "@testing-library/react";
import { ItemCount } from "./ItemCount";

describe("Item Count Component", () => {
  it("should render ItemCount Component", () => {
    render(<ItemCount count={1} name="Item 1" />);
    const el = screen.getByTestId("item-count");
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent(/Item 1 count: 1/i);
  });
});
