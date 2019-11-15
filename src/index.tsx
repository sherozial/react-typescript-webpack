import React from "react";
import ReactDOM from "react-dom";

export default function App(): JSX.Element {
  const sum = (a: number, b: number): number => a + b;
  return <h1>Hello there!!! {sum(10, 15)}</h1>;
}

ReactDOM.render(<App />, document.getElementById("root"));
