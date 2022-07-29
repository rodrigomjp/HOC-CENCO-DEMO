import React, { useContext } from "react";
import { ProductContext } from "..";

export const PriceByUnit = () => {
  const { prod } = useContext(ProductContext);
  return <p>Precio un. o kg: ${prod.priceByUnit}</p>;
};
