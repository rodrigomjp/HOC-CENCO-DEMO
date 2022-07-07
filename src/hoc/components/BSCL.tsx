import React, { useContext, ReactElement } from "react";
import { CardItems } from "../interfaces/interfaces";
import { ProductContext } from "./Card";

import gfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { CardImage } from "./CardImage";

export const BSonsComponent = () => {
  var parse = require("html-react-parser");
  const { cardItems } = useContext(ProductContext);
  const item: CardItems = JSON.parse(JSON.stringify(cardItems));
  const elementos: ReactElement[] = JSON.parse(
    JSON.stringify(item.dynamicComponentSons)
  );

  if (!item?.dynamicComponentSons) {
    return (
      <>
        <b>no implementado</b>
      </>
    );
  } else {
    return <>{elementos[0]}</>;
  }
};
