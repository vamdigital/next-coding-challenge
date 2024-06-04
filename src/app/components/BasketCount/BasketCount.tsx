import styles from "../../page.module.css";

type BasketCountProps = {
  itemCount: number;
};
export const BasketCount = ({ itemCount = 0 }: BasketCountProps) => {
  return (
    <button type="button" className={styles.basket}>
      Basket: {itemCount} items
    </button>
  );
};
