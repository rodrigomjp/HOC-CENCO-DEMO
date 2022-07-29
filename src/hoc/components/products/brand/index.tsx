import React from "react";
import { IProduct } from "../../../hooks/useProducts";

export const Brand = (props: IProduct) => {
  const { brandName } = props;
  return <div>{brandName}</div>;
};
