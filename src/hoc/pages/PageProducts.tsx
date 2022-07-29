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
// import { Sons } from "../components/Sons";
// import { Cousin } from "../components/Cousin";
import { DynamicComponentSonsV2 } from "../components/DynamicComponentSonsV2";
import { Checkbox } from "../components/products/checkbox";
import { Image } from "../components/products/image";
import { Description } from "../components/products/description";

const items2 = {
  id: "2",
  title: "Estado del pedido 2",
  img: "./logo2.jpeg",
  desc: `Seguimiento del pedido
      Recuperar boleta
      Cambiar datos de quien retira`,
};

export const PageProducts = () => {
  const resp = () => {
    try {
      const respuesta = JSON.parse(response2);
      return respuesta;
    } catch (err) {
      return <></>;
    }
  };
  const resp2 = () => {
    try {
      const respuesta = JSON.parse(response3);
      return respuesta;
    } catch (err) {
      console.log("error fatal");
    }
  };

  const x: any = resp();
  const y: any = resp2();

  return (
    <div>
      <h1>CencoDemo - FHOC - Compund Component Pattern </h1>

      <br />

      <br />
      <br />
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Card cardItems={items2}>
          <Checkbox />
          <Image />
          <Description />
        </Card>
      </div>
    </div>
  );
};
