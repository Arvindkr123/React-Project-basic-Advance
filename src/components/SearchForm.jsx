import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/Context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form action="" className="search-form" onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            onChange={searchCocktail}
            name="name"
            id="name"
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
