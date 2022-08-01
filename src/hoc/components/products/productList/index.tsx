import React from "react";
import { Product } from "..";
import useProducts, { IProduct } from "../../../hooks/useProducts";

export const ProductList = () => {
  const { products, loading, config } = useProducts();
  return (
    <>
      {!loading ? (
        products?.data?.map((prod: IProduct) => {
          return <Product prod={prod} config={config}></Product>;
        })
      ) : (
        <>loading</>
      )}
    </>
  );
};
