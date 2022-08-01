import { useContext } from "react";
import { ProductContext } from "..";

export const DeliveredQuantity = () => {
  const { prod, config } = useContext(ProductContext);
  return config?.send ? <div>Enviado: {prod.quantity}</div> : <></>;
};
