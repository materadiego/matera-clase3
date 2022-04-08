import React, { useState } from "react";

export default function ItemCount(props, onAdd) {
  const [stock, setStock] = useState(1);

  const handleClickAdd = () => {
    if (stock < props.stockMax) {
      setStock(stock + 1);
    }
  };

  const handleClickRemove = () => {
    if (stock > 1) {
      setStock(stock - 1);
    }
  };

  console.log("render");

  return (
    <div className="ItemCount">
      <button className="ItemCountButton" onClick={handleClickRemove}>
        {" "}
        -{" "}
      </button>
      <p className="ItemCountNumber">{stock}</p>
      <button className="ItemCountButton" onClick={handleClickAdd}>
        {" "}
        +{" "}
      </button>
      <br />
    </div>
  );
}
