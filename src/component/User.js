import { useParams, useLocation } from "react-router-dom";

function User() {
  const location = useLocation();
  console.log(location);
  const params = useParams();
  const { name } = params;
  console.warn(name);

  return (
    <div className="App">
      <h1>This is {name}'s page</h1>
    </div>
  );
}

export default User;
