"use client";
import { useCallback, useState } from "react";
import styles from "./page.module.css";
import { BasketCount, ItemCountList, ProductList } from "@/components";
import { addToCart, type Items } from "@/utils";
import db from "@/db.json";

export default function Home() {
  const [items, setItems] = useState<Items[]>([]);
  const [itemCount, setItemCount] = useState<number>(0);

  const clickHandler = useCallback(
    (product: string) => {
      addToCart({ product, items, itemCount, setItemCount, setItems });
    },
    [itemCount, items]
  );
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Michael&apos;s Amazing Web Store</p>
        <div>
          <BasketCount itemCount={itemCount} />
          <ItemCountList items={items} />
        </div>
      </div>

      <div className={styles.grid}>
        <ProductList products={db.products} clickHandler={clickHandler} />
      </div>
    </main>
  );
}
