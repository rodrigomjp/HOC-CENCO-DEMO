import React, { useContext } from "react";
import { ProductContext } from "..";

export const Reasons = () => {
  const { isChecked } = useContext(ProductContext);
  return isChecked ? (
    <>
      <p>¿Puedes elegir el motivo?</p>
      <select>
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
