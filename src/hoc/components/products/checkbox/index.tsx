import React, { useContext } from "react";
import { ProductContext } from "..";
import { Checkbox } from "@library/cenco-ux-components/form";


export const CheckboxProduct = () => {
  const { isChecked, setIsChecked, config } = useContext(ProductContext);
  return config?.check ? (
    <>
    <Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
    </>
  ) : (
    <></>
  );
};
