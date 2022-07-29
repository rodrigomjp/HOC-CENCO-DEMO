import React, { useContext } from "react";
import { ProductContext } from "..";
import { IProduct } from "../../../hooks/useProducts";

export const Price = () => {
  const { prod } = useContext(ProductContext);
  return <>Total: ${prod.total}</>;
};
