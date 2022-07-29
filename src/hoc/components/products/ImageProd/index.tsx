import React, { useContext } from "react";
import { createContext } from "vm";
import { ProductContext } from "..";
import { IProduct } from "../../../hooks/useProducts";
import { IProductContextProps } from "../../../interfaces/interfaces";

export const ImageProd = () => {
  const { prod } = useContext(ProductContext);
  return <img src={prod.imageUrl} width={200} height={200} />;
};
