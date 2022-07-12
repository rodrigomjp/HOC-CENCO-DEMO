import React from "react";
import { IdynamicCompSons2 } from "./DynamicComponentSonsV2";
import useDisplayComponent from "./useDisplayComponent";

export const Sons = ({ cousin }: any) => {
  const { CreateSon } = useDisplayComponent();

  try {
    const sons: IdynamicCompSons2[] = cousin;

    sons.sort(function (x: IdynamicCompSons2, y: IdynamicCompSons2) {
      if (x.order > y.order) {
        return 1;
      }
      if (x.order < y.order) {
        return -1;
      }
      return 0;
    });

    let reactElement: React.ReactElement[] = [];
    sons?.forEach((element: IdynamicCompSons2) => {
      console.log(element);
      reactElement.push(CreateSon(element));
    });

    return <>{reactElement}</>;
  } catch (err) {
    console.log(err);
    return <></>;
  }
};
