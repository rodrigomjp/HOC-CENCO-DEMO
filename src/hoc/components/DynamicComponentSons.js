import { useContext } from "react";
import JsxParser from "react-jsx-parser";
import { ProductContext } from "./Card";
import {
  CardImage,
  CardTitle,
  CardDescription,
  CardButtons,
} from "../components";

export const DynamicComponentSons = () => {
  const { cardItems } = useContext(ProductContext);
  const item = JSON.parse(JSON.stringify(cardItems));

  let childObject = "";
  item?.dynamicComponentSons.forEach((childComponent) => {
    childObject += childComponent;
  });

  return (
    <JsxParser
      jsx={childObject}
      components={{ CardTitle, CardImage, CardButtons, CardDescription }}
    />
  );
};
