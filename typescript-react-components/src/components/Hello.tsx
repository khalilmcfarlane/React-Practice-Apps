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
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <h1>
        {message} {name}{emoji}!
      </h1>
    </div>
  );
}

export default Hello;
