import { useContext } from "react";
import { ProductContext } from "..";

export const Price = () => {
  const { prod } = useContext(ProductContext);
  return <>Total: ${prod.total}</>;
};
