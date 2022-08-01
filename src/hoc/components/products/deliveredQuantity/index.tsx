import { useContext } from "react";
import { ProductContext } from "..";

export const DeliveredQuantity = () => {
  const { prod, config } = useContext(ProductContext);
  return config?.send ? <p>Enviado: {prod.quantity}</p> : <></>;
};
