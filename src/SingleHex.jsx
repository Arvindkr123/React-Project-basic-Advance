import React, { useState, useEffect } from "react";
import rgbToHex from "./Utils/utils";

const SingleColor = ({ index, rgb, weight, hex }) => {
  const [alert, setAlert] = useState(false);
  let bcg = rgb.join(",");
  let hexValue = `#${hex}`;

  useEffect(() => {
    let timeValue = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => clearTimeout(timeValue);
  }, [alert]);

  return (
    <article
      className={`color ${index > 4 && `color-light`}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copy to Clipboard</p>}
    </article>
  );
};

export default SingleColor;
