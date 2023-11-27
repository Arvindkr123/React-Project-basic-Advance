import React from "react";

const Person = ({ name, removePerson, id }) => {
  console.log("render..");
  return (
    <div>
      <h1>{name}</h1>
      <button className="btn" onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default Person;
