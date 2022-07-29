import { useContext } from "react";
import { ProductContext } from "..";

export const DeliveredQuantity = () => {
  const { prod } = useContext(ProductContext);
  return <div>Enviado: {prod.quantity}</div>;
};
