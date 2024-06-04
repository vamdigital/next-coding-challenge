import { SetStateAction } from "react";

export type Items = {
  name: string;
  quantity: number;
};

type UpdaterFnProps = {
  items: Items[];
  itemIndex: number;
};

type AddToCartFnProps = {
  product: string;
  items: Items[];
  setItems: (value: SetStateAction<Items[]>) => void;
  setItemCount: (value: SetStateAction<number>) => void;
  itemCount: number;
};

export const updaterFn = ({ items, itemIndex }: UpdaterFnProps) => {
  const updatedItemObject = {
    ...items[itemIndex],
    quantity: items[itemIndex].quantity + 1,
  };
  const newItemArr = [
    ...items.slice(0, itemIndex),
    updatedItemObject,
    ...items.slice(itemIndex + 1),
  ];
  return newItemArr;
};

export const addToCart = ({
  product,
  items,
  setItems,
  setItemCount,
  itemCount,
}: AddToCartFnProps) => {
  const alreadyInCart = items.find((item) => item.name === product);
  if (alreadyInCart) {
    const { name: selectedItemName } = alreadyInCart;
    const idx = items.findIndex((item) => item.name === selectedItemName);
    const updatedItems = updaterFn({ items, itemIndex: idx });
    setItems([...updatedItems]);
  } else {
    setItems([...items, { name: product, quantity: 1 }]);
  }
  setItemCount(itemCount + 1);
};
