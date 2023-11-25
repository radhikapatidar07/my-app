import React from "react";
import { useNavigate } from "react-router-dom";

function User(props) {
  const navigate = useNavigate();

  console.warn(props.params.id);

  return (
    <div>
      <h1>Hi this is user no {props.params.id}</h1>
      <h1>Hi this is {props.params.name}</h1>
    </div>
  );
}

export default User;
