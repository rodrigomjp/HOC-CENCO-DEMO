import {
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  CardButtons,
  BSonsComponent,
} from "../components";

import styles from "../styles/styles.module.css";
import { response2, response3 } from "./../../api";

import { DynamicComponentSons } from "../components/DynamicComponentSons";
import { DynamicComponentSonsV2 } from "../components/DynamicComponentSonsV2";
import { ProductList } from "../components/products/productList";

const items2 = {
  id: "2",
  title: "Estado del pedido 2",
  img: "./logo2.jpeg",
  desc: `Seguimiento del pedido
      Recuperar boleta
      Cambiar datos de quien retira`,
};

export const PageProducts = () => {
  return (
    <div>
      <h1>CencoDemo - FHOC - Compund Component Pattern </h1>

      <hr></hr>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {/* <Product /> */}
        <ProductList />
      </div>
    </div>
  );
};
