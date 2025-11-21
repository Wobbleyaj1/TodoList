import { useState } from "react";
import "./styles.css";

/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [cityList, setCityList] = useState(["Atlanta"]);
  const addCities = () => {
    return setCityList((prevCities) => [...cityList, inputValue]);
  };

  return (
    <div className="App">
      <input
        placeholder="Add city"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={addCities}>Add</button>
      {cityList.map((city, index) => (
        <li key={index}>
          <span>{city}</span>
        </li>
      ))}
    </div>
  );
}
