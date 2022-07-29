import React, { useContext } from "react";
import { ProductContext } from "..";

export const Checkbox = () => {
  const { isChecked, setIsChecked, config } = useContext(ProductContext);
  console.log("check cobngig ", config);
  return (
    <input
      type={"checkbox"}
      onClick={() => {
        setIsChecked(!isChecked);
      }}
    />
  );
};
