import React, { useState } from "react";
import SingleColor from "./SingleHex";
import Values from "values.js";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(amountColor);
      // console.log(colors);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        <h4>List goes here</h4>
        {list.map((item, index) => {
          return (
            <SingleColor hex={item.hex} {...item} key={index} index={index} />
          );
        })}
      </section>
    </>
  );
};

export default App;
