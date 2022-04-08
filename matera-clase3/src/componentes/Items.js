import React from "react";
import ItemCount from "./ItemCount";

function Items(id, nombre, precio, imagen, stock) {
  return (
    <div key={id} className="Card">
      <img src={imagen} alt="imagen" />
      <h4 className="ItemTitle">{nombre}</h4>
      <h5 className="Precio">Precio: {precio}</h5>
      <ItemCount stockMax={stock} />
    </div>
  );
}

export default Items;
