import { useContext } from "react";
import { ProductContext } from "./Card";
import useDisplayComponent from "./useDisplayComponent";

export interface IdynamicCompSons2 {
  component: string;
  order: number;
  className: string;
  style: string;
  data: any;
}

export const DynamicComponentSonsV2 = () => {
  const { cardItems } = useContext(ProductContext);
  const { CreateSon } = useDisplayComponent();

  const sons: IdynamicCompSons2[] = cardItems?.dynamicComponentSons2;
  try {
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
