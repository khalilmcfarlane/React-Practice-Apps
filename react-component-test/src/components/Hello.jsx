const name = "Khalil";

function displayMessage(message) {
  return message;
}

function sayHi() {
  return "Hi!";
}
function Hello() {
  return (
    // It's good to wrap div around root elements
    <div>
      <h1>
        Hello from component! {name}, {displayMessage("Wow")}
      </h1>
    </div>
  );
}

export default Hello;
