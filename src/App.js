import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import User from "./User";

function App() {
  const [data, setData] = useState({ name: "Radhika", age: 21 });
  return (
    <div className="App">
      <h1>State object with Hooks</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={data.name}
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter age"
        value={data.age}
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
      />
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
    </div>
  );
}

export default App;
