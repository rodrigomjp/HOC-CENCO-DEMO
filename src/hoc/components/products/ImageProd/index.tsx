import React, { useContext } from "react";
import { ProductContext } from "..";

export const ImageProd = () => {
  const { prod } = useContext(ProductContext);
  return <img src={prod.imageUrl} width={200} height={200} />;
};
