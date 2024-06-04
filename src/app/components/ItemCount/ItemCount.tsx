type ItemCountProps = {
  count: number;
  name: string;
};

export function ItemCount({ count, name }: ItemCountProps) {
  return (
    <div key={name} data-testid="item-count">
      {name} count: {count}
    </div>
  );
}
