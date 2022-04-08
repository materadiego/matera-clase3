import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import productos from "../utils/productos";
import ItemList from "./ItemsList";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    customFetch(2000, productos)
      .then(resultado => setItems(resultado))
      .catch(error => console.log(error));
  }, [items]);
  return (
    <>
      <ItemList productos={items} />
    </>
  )
}
