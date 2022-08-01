import React, { useContext } from "react";
import { ProductContext } from "..";

export const RequestQuantity = () => {
  const { prod, config } = useContext(ProductContext);
  return prod.originalQuantity && config?.request ? (
    <p>Solicitado: {prod.originalQuantity}</p>
  ) : (
    <></>
  );
};
