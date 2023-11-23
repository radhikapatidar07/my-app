import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <h1>About Page</h1>
      <p>This is About page of the website</p>
      <p>This is About page of the website</p>
      <Link to="/">Go to Home page</Link>
      <li>
        <Link to="/user/anil" state={{ name: "Anil Siddhu" }}>
          Anil
        </Link>
      </li>
    </>
  );
}

export default About;
