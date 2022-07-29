import { createContext, useState } from "react";
import { cancelMessage } from "../../constant";
import { IProduct } from "../../hooks/useProducts";
import { IProductContextProps } from "../../interfaces/interfaces";
import { Checkbox } from "./checkbox";
import { DeliveredQuantity } from "./deliveredQuantity";
import { Description } from "./description";
import { GenericMessage, Types } from "./GenericMessage";
import { ImageProd } from "./ImageProd";
import { Price } from "./Price";
import { PriceByUnit } from "./PricebyUnit";
import { Reasons } from "./reasons";
import { RequestQuantity } from "./requestQuantity";

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;
export const Product = (props: IProduct) => {
  const [isChecked, setIsChecked] = useState(false);
  console.log("props pal provider ", props);
  return (
    <Provider value={{ prod: props, setIsChecked, isChecked }}>
      <>
        <Checkbox></Checkbox>
        <div>
          <div>
            <ImageProd></ImageProd>
            <div>
              <Description></Description>
              <RequestQuantity></RequestQuantity>
              <DeliveredQuantity></DeliveredQuantity>
            </div>
            <div>
              <PriceByUnit></PriceByUnit>
              <Price></Price>
            </div>
          </div>
          <GenericMessage
            display={props.status === "canceled"}
            message={cancelMessage}
            type={Types.warning}
          ></GenericMessage>
          <Reasons></Reasons>
        </div>
      </>
    </Provider>
  );
};
