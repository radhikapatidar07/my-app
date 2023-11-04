import logo from "./logo.svg";
import "./App.css";
import React from "react";
import User from "./User";

function App() {
  const student = [
    { name: "Radhika", email: "radhika@gmail.com", contact: 444 },
    { name: "Ram", email: "ram@gmail.com", contact: 111 },
    { name: "Radha", email: "radha@gmail.com", contact: 222 },
    { name: "Radhi", email: "radhi@gmail.com", contact: 333 },
  ];
  return (
    <div className="App">
      <h1>Handle Array with list</h1>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>email</td>
            <td>Contact</td>
          </tr>
          {User.map((item, i) =>
            item.contact === "111" ? (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
