import styles from "../../page.module.css";

type Products = {
  id: number;
  title: string;
  subTitle: string;
};

type Props = {
  products: Products[];
  clickHandler: (product: string) => void;
};

export const ProductList = ({ products, clickHandler }: Props) => {
  return (
    <>
      {products.map((product) => (
        <button
          key={product.id}
          className={styles.card}
          onClick={() => clickHandler(product.title)}
          aria-label="Add to basket"
        >
          <h2>
            {product.title} <span>-&gt;</span>
          </h2>
          <p>{product.subTitle}</p>
        </button>
      ))}
    </>
  );
};
