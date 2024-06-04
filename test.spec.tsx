import { act, render, screen } from "@testing-library/react";
import Home from "@/page";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Home", () => {
  it("renders an empty basket", () => {
    render(<Home />);

    const basketButton = screen.getByRole("button", {
      name: /Basket: 0 items/i,
    });

    expect(basketButton).toBeInTheDocument();
  });

  it("renders a basket with 1 item", async () => {
    render(<Home />);

    const buttons = screen.getAllByRole("button", {
      name: /Add to basket/i,
    });

    await act(async () => {
      await buttons[0].click();
    });

    const basketButton = screen.getByRole("button", {
      name: /Basket: 1 item/i,
    });

    expect(basketButton).toBeInTheDocument();
  });

  it("renders a basket with 1 of item 1 and 2 of item 2", async () => {
    render(<Home />);

    const buttons = screen.getAllByRole("button", {
      name: /Add to basket/i,
    });

    await act(async () => {
      await buttons[0].click();
      await buttons[1].click();
    });

    await act(async () => {
      await buttons[1].click();
    });

    const basketButton = screen.getByRole("button", {
      name: /Basket:/i,
    });

    expect(basketButton).toHaveTextContent(/Basket: 2 items$/);
  });
});
