import { Items } from "@/utils";
import { ItemCount } from "@/components";

type Props = {
  items: Items[];
};
export const ItemCountList = ({ items }: Props) => {
  if (items.length === 0) return <div>No items in Bag</div>;
  return (
    <div data-testid="item-count-list">
      {items
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item) => {
          return (
            <ItemCount
              key={item.name}
              name={item.name}
              count={item.quantity || 0}
            />
          );
        })}
    </div>
  );
};
