import React, { useContext } from "react";
import { ProductContext } from "..";

export const Description = () => {
  const { prod } = useContext(ProductContext);
  return <p>{prod.description}</p>;
};
