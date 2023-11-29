import React from "react";
import { useGlobalContext } from "../context/Context";
import Loading from "./Loading";
import CockTail from "./CockTail";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">no cocktails matched with your criteria</h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <CockTail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
