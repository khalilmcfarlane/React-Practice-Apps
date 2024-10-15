import { SayName } from "./Hello"
import Hello from "./Hello";
export default function ConditionalComponent() {
  const display = true;
  /*
  let message: JSX.Element;
  if (display) {
    message = <h1>Message 1</h1>;
  } else {
    message = <h1>Msg 2</h1>;
  }
  return message;
  */
  return (
    <div>
      {display ? <h1>Message 1</h1> : <h1>Message 2</h1>}
    </div>
    );
}

export function ConditionalRender() {
  const display = false;
  return (
    <div>
      {display ? <SayName name="Khalil"/> : <Hello name="Khalil" message="Sup," />}
    </div>
  )
}