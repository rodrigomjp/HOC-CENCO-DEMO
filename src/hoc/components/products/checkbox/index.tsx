import React, { useContext } from "react";
import { ProductContext } from "..";

export const Checkbox = () => {
  const { isChecked, setIsChecked, config } = useContext(ProductContext);
  return config?.check ? (
    <input
      type={"checkbox"}
      onClick={() => {
        setIsChecked(!isChecked);
      }}
    />
  ) : (
    <></>
  );
};
