import { useContext } from "react";
import { ProductContext } from "./Card";

export const BSonsComponent = () => {
  const { cardItems } = useContext(ProductContext);

  if (!cardItems?.dynamicComponentSons) {
    return (
      <>
        <b>no implementado</b>
      </>
    );
  } else {
    return <>{cardItems.dynamicComponentSons}</>;
  }
};
