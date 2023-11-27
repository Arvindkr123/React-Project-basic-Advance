import React from "react";

const Person = ({ name }) => {
  console.log("render..");
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Person;
