import {
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  CardButtons,
  BSonsComponent,
} from "../components";
// import { CardDescription } from "../components/CardDescription";
import styles from "../styles/styles.module.css";
import { response2 } from "./../../api";
// import { } from "react-router"

import { DynamicComponentSons } from "../components/DynamicComponentSons";
const items = {
  id: "1",
  title: "Estado del pedido",
  img: "./logo.png",
  desc: `Seguimiento de compra
  Recuperar boleta
  Cambiar datos de quien retira`,
  // className: `${styles.FlexContainer}`,
};

const items2 = {
  id: "2",
  title: "Estado del pedido 2",
  img: "./logo2.jpeg",
  desc: `Seguimiento del pedido
    Recuperar boleta
    Cambiar datos de quien retira`,
};

const items3 = {
  id: "3",
  title: "Estado del pedido 3",
  img: "./logo3.png",
  desc: `Seguimiento de pedido
      Ver pedido
      No me ha llegado`,
  dynamicComponentSons: [
    <CardImage />,
    <CardTitle />,
    <CardDescription />,
    // <CardButtons />,
  ],
};

export const Page = () => {
  const resp = () => {
    try {
      const respuesta = JSON.parse(response2);
      return respuesta;
    } catch (err) {
      console.log(err);
    }
  };

  const x: any = resp();

  return (
    <div>
      <h1>CencoDemo - HOC - Compund Component Pattern </h1>

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
        {/* className={styles.FlexContainer} 
        style={{ color: "red", textAlign: "center" }}
        
        */}

        <Card cardItems={items}>
          <CardImage style={{ imageOrientation: "revert" }} />
          <CardTitle />
          <CardDescription />
        </Card>
        <br></br>
        <Card cardItems={items2}>
          <CardTitle />
          <CardImage />
          <CardDescription />
          <CardButtons />
        </Card>
        <br></br>
        <Card cardItems={items3}>
          <BSonsComponent />
        </Card>
        <Card cardItems={x[0]}>
          <DynamicComponentSons />
        </Card>
      </div>
    </div>
  );
};
