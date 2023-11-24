import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import User from "./User";

function App() {
  let users = [
    { id: 1, name: "Radhika", email: "radhika@test.com" },
    { id: 2, name: "Pooja", email: "pooja@test.com" },
    { id: 3, name: "Sam", email: "sam@test.com" },
    { id: 4, name: "Neetu", email: "neetu@test.com" },
    { id: 5, name: "Mina", email: "mina@test.com" },
  ];
  return (
    <div className="App">
      <Router>
        <h1>React Dhynamic Routing</h1>
        {users.map((item) => (
          <div>
            <Link to={"/user/" + item.id + "/" + item.name}>
              <h3>{item.name}</h3>
            </Link>
          </div>
        ))}
        <Routes>
          <Route path="/user/:id/:name" element={<User />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
