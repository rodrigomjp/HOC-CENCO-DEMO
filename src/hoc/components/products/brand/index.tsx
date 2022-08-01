import React, { useContext } from "react";
import { ProductContext } from "..";

export const Brand = () => {
  const { prod } = useContext(ProductContext);
  return <p>{prod.brandName}</p>;
};
