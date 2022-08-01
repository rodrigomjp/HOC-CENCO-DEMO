import React, { useContext } from "react";
import { ProductContext } from "..";

export const Reasons = () => {
  const { isChecked, config } = useContext(ProductContext);
  return isChecked && config?.reason ? (
    <>
      <p>¿Puedes elegir el motivo?</p>
      <select>
        <option>seleccione...</option>
        <option>No me gusto</option>
        <option>Lo encontré mas barato en otro lugar</option>
        <option>No quiero informar</option>
        <option>Ya no lo necesito</option>
      </select>
    </>
  ) : (
    <></>
  );
};
