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

export default Hello;
