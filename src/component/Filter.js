import { useSearchParams } from "react-router-dom";
function Filter() {
  const [searchParam, setSearchParam] = useSearchParams();
  console.warn(searchParam.get("age"));
  console.warn(searchParam.get("city"));
  const age = searchParam.get("age");
  const city = searchParam.get("city");
  return (
    <div>
      <h1>Filter page</h1>
      <h3>Age is : {age}</h3>
      <h3>City is : {city}</h3>
      <input
        type="text"
        onChange={(e) => setSearchParam({ text: e.target.value })}
        placeholder="Set Search in query param"
      />{" "}
      <br />
      <br />
      <button onClick={() => setSearchParam({ age: 40 })}>
        Set Age in Query Param
      </button>
    </div>
  );
}

export default Filter;
