import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Table from "react-bootstrap/Table";

function App() {
  const student = [
    {
      name: "Radhika",
      email: "radhika@gmail.com",
      contact: 444,
      address: [{ Hn: 11, country: "India", street: "mark" }],
    },
    {
      name: "Ram",
      email: "ram@gmail.com",
      contact: 111,
      address: [{ Hn: 22, country: "Nepal", street: "jon" }],
    },
    {
      name: "Radha",
      email: "radha@gmail.com",
      contact: 222,
      address: [{ Hn: 33, country: "China", street: "gark" }],
    },
    {
      name: "Radhi",
      email: "radhi@gmail.com",
      contact: 333,
      address: [{ Hn: 44, country: "US", street: "neml" }],
    },
  ];
  return (
    <div className="App">
      <h1>Handle Array with list</h1>
      <Table>
        <tbody>
          <tr>
            <td>S.No</td>
            <td>Name</td>
            <td>email</td>
            <td>Contact</td>
          </tr>
        </tbody>

        {student.map((item, i) =>
          (<tr key={i}>
            <td>{i}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.contact}</td>
          </tr>)(
            <Table>
              <tbody>
                {item.address.map((data) => (
                  <tr>
                    <td>{data.Hn}</td>
                    <td>{data.street}</td>
                    <td>{data.contact}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )
        )}
      </Table>
    </div>
  );
}

export default App;
