import { useContext } from "react";
import { ProductContext } from "./Card";

export const Cousin = () => {
  const { cardItems } = useContext(ProductContext);
  return (
    <>
      <h2>I'm Caousin</h2>
      <h3>Information of phather {cardItems.title}</h3>
    </>
  );
};
