export function SayName({ name }: { name: string }): React.JSX.Element {
  return (
    <div>
      <h1>Hi, my name is {name}!</h1>
    </div>
  );
}

function Hello(): React.JSX.Element {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <h1>Hello Khalil!</h1>
      <div id="Square">I'm going to square numbers from 1 to 10.</div>
    </div>
  );
}

export default Hello;
