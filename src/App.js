import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import NavBar from "./component/NavBar";
import Page404 from "./component/Page404";
import { Navigate } from "react-router-dom";
import User from "./component/User";
import Filter from "./component/Filter";
import Contact from "./component/Contact";
import Channel from "./component/Channel";
import Company from "./component/Company";
import Other from "./component/Other";
import Login from "./component/Login";
import Protected from "./component/Protected";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<Protected Component={Home} />} />
          <Route path="/filter" element={<Protected Component={Home} />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/contact/" element={<Protected Component={Home} />} />
          <Route path="company" element={<Company />} />
          <Route path="channel" element={<Channel />} />
          <Route path="other" element={<Other />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Protected Component={Home} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
