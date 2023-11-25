import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    fetch("http://localhost:3000/todo").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp);
        setUser(resp);
        setName(resp[0].name);
        setName(resp[0].email);
        setName(resp[0].mobile);
        setUserId(resp[0].id);
      });
    });
  }
  // console.warn(users);

  function deleteUser(id) {
    fetch(`http://localhost:3000/todo/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp);
        getUser();
      });
    });
  }

  function selectUser(id) {
    console.warn("Function Called", users[id - 1]);
    let item = users[id - 1];
    setName(item.name);
    setEmail(item.email);
    setMobile(item.mobile);
    setUserId(item.id);
  }

  function updateUser() {
    let items = { name, email, mobile, userId };
    fetch(`http://localhost:3000/todo/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    }).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp);
        getUser();
      });
    });
  }

  return (
    <div className="App">
      <h1>Get API call</h1>
      <table border="1" style={{ float: "left" }}>
        <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Operations</td>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>
                <button onClick={() => deleteUser(item.id)}>Delete</button>
                <button onClick={() => selectUser(item.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />
        <br />
        <button onClick={updateUser}>Update User</button>
      </div>
    </div>
  );
}

export default App;
