import React from "react";
import Items from "./Items";

function ItemList({ productos }) {
  return (productos.map(p => (
    <Items key={p.id} nombre={p.nombre} imagen={p.imagen} precio={p.precio} />
  )))
}

export default ItemList;
