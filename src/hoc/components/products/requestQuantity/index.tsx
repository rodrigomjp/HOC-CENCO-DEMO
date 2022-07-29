import React, { useContext } from "react";
import { ProductContext } from "..";

export const RequestQuantity = () => {
  const { prod } = useContext(ProductContext);
  return prod.originalQuantity ? (
    <p>Solicitado: {prod.originalQuantity}</p>
  ) : (
    <></>
  );
};
