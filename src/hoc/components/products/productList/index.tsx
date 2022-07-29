import React from "react";
import { Product } from "..";
import useProducts, { IProduct } from "../../../hooks/useProducts";

export const ProductList = () => {
  const { products } = useProducts();

  products?.data?.forEach((prod: IProduct) => {
    return <Product {...prod}></Product>;
  });
  return <div>checkbox</div>;
};
ProductList;
