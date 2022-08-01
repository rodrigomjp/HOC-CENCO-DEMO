import React, { useContext } from "react";
import { ProductContext } from "..";
import { Checkbox } from "@library/cenco-ux-components/form";
import "./style.scss";

export const CheckboxProduct = () => {
  const { isChecked, setIsChecked, config } = useContext(ProductContext);
  return config?.check ? (
    <div className="checkbox-product">
      <Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
    </div>
  ) : (
    <></>
  );
};
