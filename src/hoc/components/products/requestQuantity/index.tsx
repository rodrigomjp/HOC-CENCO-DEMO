import React, { useContext } from "react";
import { ProductContext } from "..";

export const RequestQuantity = () => {
  const { prod } = useContext(ProductContext);
  return <p>Solicitado: {prod.quantity}</p>;
};
