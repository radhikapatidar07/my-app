import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import React, { useRef } from "react";

function App() {
  let inputRef = useRef(null);
  function updateInput() {
    inputRef.current.value = 1000;
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  }
  return (
    <div className="App">
      <h1>Use Ref in React</h1>
      <User ref={inputRef}></User>
      <button onClick={updateInput}>Update Input Box</button>
    </div>
  );
}

export default App;
