import { createContext } from "react";
import { IProduct } from "../../hooks/useProducts";
import { Checkbox } from "./checkbox";
import { Reasons } from "./reasons";

export const Product = (props: IProduct) => {
  return (
    <>
      <Checkbox></Checkbox>
      <Reasons></Reasons>
    </>
  );
};
