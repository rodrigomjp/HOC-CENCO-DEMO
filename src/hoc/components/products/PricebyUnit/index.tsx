import React, { useContext } from "react";
import { ProductContext } from "..";

export const PriceByUnit = () => {
  const { prod, config } = useContext(ProductContext);
  return config?.unitPrice ? (
    <p>Precio un. o kg: ${prod.priceByUnit}</p>
  ) : (
    <></>
  );
};
