interface FruitProps {
  name: string;
  price: number;
  emoji?: string;
  soldOut: boolean;
}

export default function Fruit({ name, price, soldOut }: FruitProps) {
  // You can also pass in key as a prop
  return (
    <>
      {price > 3 ? (
        <li key={name}>
          {name} ${price} {soldOut ? "SOLDOUT" : ""}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
