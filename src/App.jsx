import React, { useState } from "react";
import Items from "./data";
import Category from "./Components/Category";
import Menu from "./Components/Menu";

const allCategories = ["all", ...new Set(Items.map((item) => item.category))];
console.log(allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(Items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(Items);
      return;
    }
    let filteredItems = Items.filter((item) => item.category === category);
    setMenuItems(filteredItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Category categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
