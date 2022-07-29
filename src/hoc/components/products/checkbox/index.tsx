import React, { useContext } from "react";
import { ProductContext } from "..";

export const Checkbox = () => {
  const { isChecked, setIsChecked } = useContext(ProductContext);
  return (
    <input
      type={"checkbox"}
      onClick={() => {
        setIsChecked(!isChecked);
      }}
    />
  );
};
