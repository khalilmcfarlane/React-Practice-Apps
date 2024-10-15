interface FruitProps {
  name: string;
  price: number;
  emoji?: string;
}

export default function Fruit({ name, price }: FruitProps) {
    // You can also pass in key as a prop
  return (
    <li key={name}>
      {name} ${price}
    </li>
  );
}
