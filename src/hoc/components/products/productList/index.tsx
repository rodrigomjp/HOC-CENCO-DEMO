import React from "react";
import { Product } from "..";
import useProducts, { IProduct } from "../../../hooks/useProducts";

export const ProductList = () => {
  const { products, loading } = useProducts();

  return (
    <>
      {!loading ? (
        products?.data?.map((prod: IProduct) => {
          return <Product {...prod}></Product>;
        })
      ) : (
        <>loading</>
      )}
    </>
  );
};
