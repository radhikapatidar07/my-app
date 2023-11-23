import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
function Home() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const navigateToPage = (url) => {
    navigate("url");
  };
  return (
    <>
      <h1>Home Page</h1>
      <p>This is Home page of the website</p>
      <p>This is Home page of the website</p>
      <Link to="/about">Go to About page</Link>
      <br />
      <br />
      <button onClick={() => navigateToPage("/about")}>
        go to about Page
      </button>{" "}
      <br />
      <br />
      <button onClick={() => navigateToPage("/filter")}>
        go to Filter Page
      </button>
    </>
  );
}

export default Home;
