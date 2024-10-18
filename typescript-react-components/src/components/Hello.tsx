import Fruit from "./Fruit";
export function SayName({ name }: { name: string }): React.JSX.Element {
  return (
    <div>
      <h1>Hi, my name is {name}!</h1>
    </div>
  );
}

// It's common to define props as an interface
interface Props {
  name: string;
  message: string;
  emoji?: string;
}
function Hello({ name, message, emoji = "" }: Props): React.JSX.Element {
  return (
    <div>
      <h1>
        {message} {name}
        {emoji}!
      </h1>
    </div>
  );
}

interface PersonProps {
  person: {
    name: string;
    message: string;
    emoji?: string;
  };
}

export function HelloObject({ person }: PersonProps): React.JSX.Element {
  return (
    <div>
      <h1>
        {person.message} {person.name}
        {person.emoji}!
      </h1>
    </div>
  );
}

export function Fruits() {
  const fruits = [
    { name: "apple", price: 3, soldOut: false },
    { name: "orange", price: 5, soldOut: true },
    { name: "peach", price: 7, soldOut: false },
    { name: "pineapple", price: 10, soldOut: true},
  ];
  return (
    <div>
      <h2>Random fruits</h2>
      <ul>
        {fruits.map((fruit) => ( 
          <Fruit name={fruit.name} price={fruit.price} soldOut={fruit.soldOut}/>
        ))}
      </ul>
    </div>
  );
}

export default Hello;
