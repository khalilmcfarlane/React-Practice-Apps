import { useState } from "react";
import Hello from "./components/Hello";
import printArr from "./components/Array";
import Button from './components/Button';
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);
  //const arr = ["hi", "khalil", "how", "are", "you?"];
  // function Hello is called like an html element
  return (
    <div className="App">
      <Hello/>
      <Button/>
    </div>
  );
}

export default App;
