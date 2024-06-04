import { render, screen } from "@testing-library/react";
import { BasketCount } from "./BasketCount";

describe("BasketCount Component", () => {
  it("should render the BasketCount Component given an ItemCount", () => {
    render(<BasketCount itemCount={1} />);

    const basketButton = screen.getByRole("button", {
      name: /Basket: 1 items/i,
    });
    expect(basketButton).toBeInTheDocument();
  });
});
