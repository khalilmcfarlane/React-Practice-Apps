import { useState } from "react";
import Hello from "./components/Hello";
import {HelloObject} from "./components/Hello";
import { SayName } from "./components/Hello";
import Button from "./components/Button";
import SquareNums from "./components/Math";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const person = {
    name: "John",
    message: "What's up",
    emoji: "👋",
  };

  return (
    <div className="App">
      <Hello name="Khalil" message="Hi there" />
      <HelloObject person={person} />
      <Button />
      <SayName name="Bot" />
      <SquareNums arr={nums} />
    </div>
  );
}

export default App;
