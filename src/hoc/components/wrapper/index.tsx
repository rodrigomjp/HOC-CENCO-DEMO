import { createContext } from "react";
import { IProduct } from "../../hooks/useProducts";

export const ProductEasy = (props: IProduct) => {
  return (
    <>
      <Checkbox />
      <Image />
      <Reasons />
    </>
  );
};

export const ProductParis = (props: IProduct) => {
  return (
    <>
      <Checkbox />
      <Image />
    </>
  );
};
