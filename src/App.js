import "./App.css";
import { useState } from "react";

function App() {
  //-- array of fruits
  const fruits = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];

  //-- initialize use state with empty value
  const [filter, setFilter] = useState("");

  //-- event handler
  const handleFilterEvent = (e) => {
    setFilter(e.target.value);
  };

  /** this variable is used to filter on the array
   * we add .toLoweCase() on array and input for case insesitive
   * we use .map() to print every element that satisfies the filter
   */
  const result = fruits
    .filter((fruit) => fruit.toLowerCase().includes(filter.toLowerCase()))
    .map((fruit_name) => <p key={fruit_name}>{fruit_name}</p>);

  return (
    <div className="App">
      <p>
        Search:
        <input
          type="text"
          placeholder="Filter fruits"
          value={filter}
          onChange={handleFilterEvent}
        ></input>
      </p>

      {/**check if the result is empty or no*/}
      {result.length === 0 ? <p>No fruits found</p> : result}
    </div>
  );
}

export default App;
